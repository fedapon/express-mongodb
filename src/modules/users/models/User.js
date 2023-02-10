import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: String,
    surname: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const User = model("User", userSchema)

export { User }
