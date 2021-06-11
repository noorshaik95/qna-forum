import {ApolloServer, makeExecutableSchema} from 'apollo-server';
import events from 'events';
import dotenv from 'dotenv';

import resolvers from './resolvers/index.js';
import typeDefs from './typeDefs/index.js';
import connectDB from './bootstrap/db.js';
import AccessTokenModel from './models/access_token.js';
import { isTokenValid } from './utils/userUtils.js';

dotenv.config();

const eventEmitter = new events.EventEmitter();
connectDB(eventEmitter)

const schema = makeExecutableSchema({typeDefs, resolvers});

const server = new ApolloServer({
    schema,
    subscriptions: {
        onConnect: (connectionParams, webSocket, context) => {
          console.log('Client connected');
        },
        onDisconnect: (webSocket, context) => {
          console.log('Client disconnected')
        },
    },
    context: async ({req}) => {
        if(req && req.headers['authorization']) {
            const token = req.headers['authorization'].split(" ")[1];
            const userAccessToken = await AccessTokenModel.getToken(token);
            try {
                if(isTokenValid(token, userAccessToken.secret)) {
                    req.user = userAccessToken.user;
                }
            } catch(e) {

            }
            return req;
        }
    }});

eventEmitter.on('db-connected', () => {
    server.listen('4000', () => console.log('Listening on port 4000!!'))
});