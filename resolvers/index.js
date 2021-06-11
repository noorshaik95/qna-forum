import {mergeResolvers} from 'graphql-tools';
import userResolver from './users/index.js';
import questionResolver from './questions/index.js';
import answerResolver from './answers/index.js';

export default mergeResolvers([userResolver, questionResolver, answerResolver]);
