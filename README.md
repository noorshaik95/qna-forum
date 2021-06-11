# QnA Forum

## Technology Used

- Apollo Server
- GraphQL
- Mongoose
- JSON Web Tokens

## Directory structure

```
qna-forum
├── bootstrap      [connecting the db]
├── config         [constants and subscription topics]
├── models         [db model schema]
├── resolvers      [query, mutation and subscription resolvers for all the models]
├── typeDefs       [graphql types, query, mutation and subscription definitions]
└── utils          [common used methods]
```

## Getting started

1. Install packages `npm install`

2. Define database connection settings in `bootstrap/db.js` and define env variables in `.env` at root directory

3. Run dev `npm run dev`
