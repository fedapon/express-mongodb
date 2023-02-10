import express from "express"
import { Message } from "./models/Message.js"
import { MessageService } from "./messages.service.js"
import { MessageController } from "./messages.controller.js"
import { authMiddleware } from "../auth/middlewares/auth.middleware.js"

const messagesRouter = express.Router()
const messagesService = new MessageService(Message)
const messagesController = new MessageController(messagesService)

messagesRouter.get("/", authMiddleware, messagesController.find)
messagesRouter.get("/:id", authMiddleware, messagesController.findOne)
messagesRouter.post("/", authMiddleware, messagesController.create)
messagesRouter.patch("/:id", authMiddleware, messagesController.update)
messagesRouter.delete("/:id", authMiddleware, messagesController.delete)

export { messagesRouter, messagesController, messagesService }
