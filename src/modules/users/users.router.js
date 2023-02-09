import express from "express"
import { User } from "./models/User.js"
import { UserService } from "./users.service.js"
import { UserController } from "./users.controller.js"
import { authMiddleware } from "../auth/middlewares/auth.middleware.js"

const usersRouter = express.Router()
const usersService = new UserService(User)
const usersController = new UserController(usersService)

usersRouter.get("/", authMiddleware, usersController.find)
usersRouter.get("/:id", authMiddleware, usersController.findOne)
usersRouter.post("/", authMiddleware, usersController.create)
usersRouter.patch("/:id", authMiddleware, usersController.update)
usersRouter.delete("/:id", authMiddleware, usersController.delete)

export { usersRouter, usersService }
