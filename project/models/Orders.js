import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    zip: {
        type: String,
        required: true
    },

    items: {
        type: Object,
        required: true
    },

    status: {
        type: String,
        default: "Not Paid"
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.models.orders || mongoose.model('orders', (OrderSchema))