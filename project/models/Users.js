import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    nickname: {
        type: String,
        required: true
    },

    pic: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.models.users || mongoose.model('users', (UserSchema))