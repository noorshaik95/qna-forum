import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    token: String,
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        default: new Date()
    },
    secret: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    }
});

schema.statics.getToken = function(token) {return this.findOne({token}).populate('user')};

export default mongoose.model('access_token', schema);