import AnswerModel from '../../models/answer.js';
import QuestionModel from '../../models/question.js';
import UserModel from '../../models/user.js';

const queryResolver = {
    Query: {
        answer: async (_, args) => {
            const result = await AnswerModel.findById(args.id);
            return result;
        }
    },
    Answer: {
        question: (parent, args) => {
            return QuestionModel.findById(parent.questionId);
        },
        user: (parent, args) => {
            return UserModel.findById(parent.userId);
        }
    }
};

export default queryResolver;