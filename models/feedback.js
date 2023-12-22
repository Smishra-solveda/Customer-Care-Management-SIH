import { Schema, model, models } from "mongoose";

const feedbackSchema = new Schema({
    feedbackData: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    toolsWorking: {
        type: Boolean,
        required: true
    },
    contactDeveloper: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

export const Feedback = models.Feedback || model('Feedback', feedbackSchema);