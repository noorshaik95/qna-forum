import {gql} from 'apollo-server'

export default gql `
    type Question {
        id: ID
        title: String
        description: String
        answers: [Answer]
        user: User
    }
    input CreateQuestionInput {
        title: String,
        description: String
    }
    type Query {
        questions: [Question]
        question(id: ID): Question
    }
    type Mutation {
        createQuestion(input: CreateQuestionInput): Question
    }
    type Subscription {
        questionUpdated(input: SubscriptionInput): Question
        questionCreated(input: SubscriptionInput): Question
    }
`;