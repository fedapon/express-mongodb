import { Password } from "../../helpers/password.js"

export class UserController {
    constructor(service) {
        this.usersService = service
    }

    find = async (req, resp) => {
        const users = await this.usersService.find({})
        const sanitizedUsers = users.map((user) => {
            delete user._doc.password
            return user
        })
        return resp.json({ data: sanitizedUsers })
    }

    findOne = async (req, resp) => {
        const { id } = req.params
        const user = await this.usersService.findOne(id)
        delete user._doc.password
        return resp.json({ data: user })
    }

    create = async (req, resp) => {
        try {
            req.body.password = await Password.hash(req.body.password)
            const newUser = await this.usersService.create(req.body)
            delete newUser._doc.password
            return resp.json({ data: newUser })
        } catch (err) {
            return resp.status(500).json({ message: err.message })
        }
    }

    update = async (req, resp) => {
        try {
            const { id } = req.params
            const user = await this.usersService.update(id, req.body)
            delete user._doc.password
            return resp.json({ data: user })
        } catch (err) {
            return resp.status(500).json({ message: err.message })
        }
    }

    delete = async (req, resp) => {
        const { id } = req.params
        const response = await this.usersService.delete(id)
        return resp.json({ message: response })
    }
}
