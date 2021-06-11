import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export const createHash = (password, salt) => crypto.pbkdf2Sync(password, salt, +process.env.NUMBER_OF_ITERATIONS, +process.env.KEY_LENGTH, process.env.ALGORITHM).toString(`hex`)

export const randomBytes = () => crypto.randomBytes(16).toString('hex')

export const isTokenValid = (token, secret) => jwt.verify(token, secret)

export const isAccessible = (user) => {
    if(!user) {
        throw new Error('Invalid Session!');
    }
}