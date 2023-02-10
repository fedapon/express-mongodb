import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import "./src/database/connection.js"
import { authRouter } from "./src/modules/auth/auth.router.js"
import { usersRouter } from "./src/modules/users/users.router.js"
import { messagesRouter } from "./src/modules/messages/messages.router.js"

dotenv.config()
const app = express()

//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/auth", authRouter)
app.use("/users", usersRouter)
app.use("/messages", messagesRouter)

const server = app.listen(process.env.PORT, function () {
    console.log(`Server started on port: ${process.env.PORT}`)
})
