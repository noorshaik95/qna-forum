import { withFilter } from 'apollo-server';

import SUBSCRIPTION_TOPICS from '../../config/subscriptionTopics.js'
import graphqlPubSubObject from '../../config/pubsub.js';

const subscriptionResolver = {
    Subscription: {
      answerCreated: {
        subscribe: withFilter(
            () => graphqlPubSubObject.pubsub.asyncIterator([SUBSCRIPTION_TOPICS.ANSWER_CREATED]),
            (payload, variables) => payload.toString() === variables.input.id
        ),
        resolve: (payload) => {
            return payload;
        }
      }
    }
  };

  export default subscriptionResolver;