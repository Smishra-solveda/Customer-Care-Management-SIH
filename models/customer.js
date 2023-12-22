import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    lastConversation: {
        type: String,
        required: true
    },
    productDetails: {
        type: String,
        required: true
    },
    lastOffers: {
        type: String,
        required: true
    },
});

export const Customer = models.Customer || model('Customer', userSchema);