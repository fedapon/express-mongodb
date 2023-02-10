export class MessageController {
    constructor(service) {
        this.messagesService = service
    }

    find = async (req, resp) => {
        const messages = await this.messagesService.find({})
        return resp.json({ data: messages })
    }

    findOne = async (req, resp) => {
        const { id } = req.params
        const message = await this.messagesService.findOne(id)
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
            const { id } = req.params
            const message = await this.messagesService.update(id, req.body)
            return resp.json({ data: message })
        } catch (err) {
            return resp.status(500).json({ message: err.message })
        }
    }

    delete = async (req, resp) => {
        const { id } = req.params
        const response = await this.messagesService.delete(id)
        return resp.json({ message: response })
    }
}
