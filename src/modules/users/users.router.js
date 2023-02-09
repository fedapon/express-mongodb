import express from "express"
import { User } from "./models/User.js"
import { UserService } from "./users.service.js"
import { UserController } from "./users.controller.js"

const usersRouter = express.Router()
const usersService = new UserService(User)
const usersController = new UserController(usersService)

usersRouter.get("/", usersController.find)
usersRouter.get("/:id", usersController.findOne)
usersRouter.post("/", usersController.create)
usersRouter.patch("/:id", usersController.update)
usersRouter.delete("/:id", usersController.delete)

export { usersRouter, usersService }
