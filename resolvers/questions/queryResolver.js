import QuestionModel from '../../models/question.js';
import AnswerModel from '../../models/answer.js';
import UserModel from '../../models/user.js';

const queryResolver = {
    Query: {
        question: async (_, args) => {
            const result = await QuestionModel.findById(args.id);
            result.user = result.userId;
            return result;
        }
    },
    Question: {
        answers: (parent, args) => {
            return AnswerModel.find({questionId: parent.id});
        },
        user: (parent, args) => {
            return UserModel.findById(parent.userId);
        }
    }
};

export default queryResolver;