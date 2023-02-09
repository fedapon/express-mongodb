import { Password } from "../../helpers/password.js"

export class UserController {
    constructor(service) {
        this.usersService = service
    }

    find = async (req, resp) => {
        const users = await this.usersService.find({})
        return resp.json({ data: users })
    }

    findOne = async (req, resp) => {
        const { id } = req.params
        const user = await this.usersService.findOne(id)
        return resp.json({ data: user })
    }

    create = async (req, resp) => {
        req.body.password = await Password.hash(req.body.password)
        const newUser = await this.usersService.create(req.body)
        return resp.json({ data: newUser })
    }

    update = async (req, resp) => {
        const { id } = req.params
        const user = await this.usersService.update(id, req.body)
        return resp.json({ data: user })
    }

    delete = async (req, resp) => {
        const { id } = req.params
        const response = await this.usersService.delete(id)
        return resp.json({ message: response })
    }
}
