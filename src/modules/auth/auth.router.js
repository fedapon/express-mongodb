import express from "express"
import { AuthController } from "./auth.controller.js"
import { usersController } from "../users/users.router.js"
import { usersService } from "../users/users.router.js"

const authRouter = express.Router()
const authController = new AuthController(usersService)

authRouter.post("/signin", usersController.create)
authRouter.post("/login", authController.login)

export { authRouter, authController }
