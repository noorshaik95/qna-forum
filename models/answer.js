import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    description: String,
    questionId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'question'
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    }
});

export default mongoose.model('answer', schema);