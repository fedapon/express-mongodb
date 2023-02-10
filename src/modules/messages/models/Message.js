import mongoose, { Schema, model } from "mongoose"

const messageSchema = new Schema({
    title: String,
    desciption: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const Message = model("Message", messageSchema)

export { Message }
