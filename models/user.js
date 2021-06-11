import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    email: String,
    salt: String,
    hash: String
});

schema.statics.getUser = function (id) { return this.findById(id); }

schema.statics.findUser = function (email) { return this.findOne({email}); }

export default mongoose.model('user', schema);