export class MessageController {
    constructor(service) {
        this.messagesService = service
    }

    find = async (req, resp) => {
        const { userId: user } = req.body
        const messages = await this.messagesService.find({ user })
        return resp.json({ data: messages })
    }

    findOne = async (req, resp) => {
        const { id: _id } = req.params
        const { userId: user } = req.body
        const message = await this.messagesService.findOne({ _id, user })
        return resp.json({ data: message })
    }

    create = async (req, resp) => {
        try {
            const { title, description, userId: user } = req.body
            const newMessage = await this.messagesService.create({
                title,
                description,
                user,
            })
            return resp.json({ data: newMessage })
        } catch (err) {
            return resp.status(500).json({ message: err.message })
        }
    }

    update = async (req, resp) => {
        try {
            const { id: _id } = req.params
            const { userId: user } = req.body
            const message = await this.messagesService.update(
                { _id, user },
                req.body
            )
            return resp.json({ data: message })
        } catch (err) {
            return resp.status(500).json({ message: err.message })
        }
    }

    delete = async (req, resp) => {
        const { id: _id } = req.params
        const { userId: user } = req.body
        const response = await this.messagesService.delete({ _id, user })
        return resp.json({ message: response })
    }
}
