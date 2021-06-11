import mongoose from 'mongoose';

export default async (eventEmitter) => {
    try {
        await mongoose.connect('mongodb://localhost:27027/qnaforum', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
        eventEmitter.emit('db-connected');
    } catch(e) {

    }
}