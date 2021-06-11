import AnswerModel from '../../models/answer.js';
import QuestionModel from '../../models/question.js';
import { isAccessible } from '../../utils/userUtils.js';
import graphqlPubSubObject from '../../config/pubsub.js';
import SUBSCRIPTION_TOPICS from '../../config/subscriptionTopics.js'

const mutationResolver = {
    Mutation: {
        createAnswer: async (_, args, ctx) => {
            isAccessible(ctx.user);
            const {input} = args;
            const isQuestionExists = await QuestionModel.findById(input.questionId)
            if(!isQuestionExists) {
                throw new Error('Question does not exists!');
            }
            const answer = new AnswerModel(input);
            answer.userId = ctx.user.id;
            await QuestionModel.updateOne({_id: isQuestionExists.id}, {$push: {answers: answer.id}});
            await answer.save();
            graphqlPubSubObject.pubsub.publish(SUBSCRIPTION_TOPICS.ANSWER_CREATED, answer);           
            return answer;
        }
    }
};

export default mutationResolver;