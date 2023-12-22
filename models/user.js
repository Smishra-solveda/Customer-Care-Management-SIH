import { Schema, models, model } from "mongoose"

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    image: {
        type: String,
        default: "https://lh3.googleusercontent.com/pw/AIL4fc8HNoZMzOuYjCxEo87HfKOM62wSqBOCEw8-m6hms4dKejd4zC94r9-Iw35oRkWCvMIdcEAKxenMvvY2Far40EPv-YK_mVMiPozQOVOMjykiyiBbuAsDhjqgtSI37C8bpm2vOIl9T9goSdyrZuSwz7k=w512-h512-s-no?authuser=0"
    },
    rating: {
        type: Number,
        max: 5,
        min: 0,
        float: true,
        default: 5,
    },
},
    {
        timestamps: true
    });

export const User = models?.users || model("users", UserSchema);