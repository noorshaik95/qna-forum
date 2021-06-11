import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import {createHash, randomBytes} from '../../utils/userUtils.js';
import UserModel from '../../models/user.js';
import AccessTokenModel from '../../models/access_token.js';

const mutationResolver = {
    Mutation: {
        signUp: async (_, args) => {
            const {user: userData} = args;
            const isUserIsExists = await UserModel.findUser(userData.email);
            if(isUserIsExists) {
                throw new Error('User already exists!');
            }
            const salt = randomBytes();
            const hash = createHash(userData.password, salt);;
            return UserModel.create({
                ...userData,
                salt,
                hash
            });
        },
        login: async (_, args) => {
            const {user: userData} = args;
            const user = await UserModel.findUser(userData.email);
            if(!user) {
                throw new Error('No account found with this email!');
            }
            const hash = createHash(userData.password, user.salt);
            if(hash !== user.hash) {
                throw new Error('Password is wrong!');
            }
            const secret = randomBytes();
            const token = jwt.sign({userId: user.id}, secret, { algorithm: 'HS256', expiresIn: process.env.EXPIRES_IN});
            await new AccessTokenModel({secret, token, user: user.id}).save();
            return {payload: token}
        }
    }
};

export default mutationResolver;