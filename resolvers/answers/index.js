import {mergeResolvers} from 'graphql-tools';

import queryResolver from './queryResolver.js'
import mutationResolver from './mutationResolver.js';
import subscriptionResolver from './subscriptionResolver.js';

export default mergeResolvers([queryResolver, mutationResolver, subscriptionResolver]);