import {gql} from 'apollo-server'

export default gql `
    type User {
        id: ID
        email: String
        name: String
    }
    input UserInput {
        email: String,
        name: String
        password: String
    }
    input UserLoginInput {
        email: String,
        password: String
    }
    type UserLoginOutput {
        payload: String
    }
    type Query {
        user(id: ID): User
    }
    type Mutation {
        signUp(user: UserInput): User
        login(user: UserLoginInput): UserLoginOutput
    }
`;