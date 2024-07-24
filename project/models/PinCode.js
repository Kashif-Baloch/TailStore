import mongoose, { Schema } from "mongoose";

const PinCodeSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    Pcode: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.models.pincodes || mongoose.model('pincodes', (PinCodeSchema))