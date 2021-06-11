import UserModel from '../../models/user.js';

const queryResolver = {
    Query: {
        user: (_, args) => {
            return UserModel.findById(args.id);
        }
    }
};

export default queryResolver;