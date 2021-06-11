import {mergeTypeDefs} from 'graphql-tools';

import userTypeDef from './user.js';
import questionTypeDef from './question.js';
import answerTypeDef from './answer.js';

export default mergeTypeDefs([userTypeDef, questionTypeDef, answerTypeDef]);
