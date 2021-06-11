import {mergeResolvers} from 'graphql-tools';

import queryResolver from './queryResolver.js'
import mutationResolver from './mutationResolver.js';

export default mergeResolvers([queryResolver, mutationResolver]);