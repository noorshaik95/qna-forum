import {PubSub} from 'apollo-server';

class GraphQLPubSub {
    constructor() {
        if(!GraphQLPubSub.instance) {
            this.pubsub = new PubSub();
            GraphQLPubSub.instance = this;
        }
        return GraphQLPubSub.instance;
    }
}

const graphqlPubSubObject = new GraphQLPubSub();

Object.freeze(graphqlPubSubObject);

export default graphqlPubSubObject;