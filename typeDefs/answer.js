import {gql} from 'apollo-server'

export default gql `
    type Answer {
        id: ID
        description: String
        user: User
        question: Question
    }
    input CreateAnswerInput {
        description: String
        questionId: ID
    }
    input SubscriptionInput {
        id: ID
    }
    type SubscriptionOutput {
        description: String
    }
    type Query {
        answers: [Answer]
        answer(id: ID): Answer
    }
    type Mutation {
        createAnswer(input: CreateAnswerInput): Answer

    }
    type Subscription {
        answerUpdated(input: SubscriptionInput): Answer
        answerCreated(input: SubscriptionInput): Answer
    }
`;