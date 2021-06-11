import QuestionModel from '../../models/question.js';
import { isAccessible } from '../../utils/userUtils.js';

const mutationResolver = {
    Mutation: {
        createQuestion: async (_, args, ctx) => {
            isAccessible(ctx.user);
            const {input} = args;
            const question = new QuestionModel(input);
            question.userId = ctx.user.id;
            return await question.save();
        }
    }
};

export default mutationResolver;