import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const uri = process.env.MONGODB_URI
mongoose.set("strictQuery", false)
const db = mongoose.connect(uri, { useNewUrlParser: true })

export default db
