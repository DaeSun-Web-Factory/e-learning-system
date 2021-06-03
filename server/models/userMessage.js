import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userId: String,
    password: String,
    name: String,
    userNumber: String,
    authority: String,
    email: String,
    createAt: {
        type: Date,
        default: Date.now()
    }
});

const UserMessage = mongoose.model('UserMessage', userSchema);

export default UserMessage;