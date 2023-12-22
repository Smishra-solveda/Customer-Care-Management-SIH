import { Schema, model, models } from "mongoose";

const notifSchema = new Schema({
    info: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

export const Notification = models.Notification || model('Notification', notifSchema);