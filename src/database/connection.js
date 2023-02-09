import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const uri = process.env.MONGODB_URI
mongoose.set("strictQuery", false)

mongoose.connect(uri, { useNewUrlParser: true })

mongoose.connection.on("error", (err) => {
    console.log(err)
})
