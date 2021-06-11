import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: String,
    description: String,
    answers: [{
        default: [],
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'answer'
    }],
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    }
});

export default mongoose.model('question', schema);