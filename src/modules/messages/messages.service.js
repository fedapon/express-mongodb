export class MessageService {
    constructor(model) {
        this.repository = model
    }

    find = (criteria = {}) => {
        return this.repository.find(criteria)
    }

    findOne = async (id) => {
        return this.repository.findById(id)
    }

    findOneByEmail = async (email) => {
        return this.repository.findOne({ email })
    }

    create = async (dto) => {
        const model = new this.repository(dto)
        return model.save()
    }

    update = async (id, dto) => {
        return this.repository.findByIdAndUpdate(id, dto, { new: true })
    }

    delete = async (id) => {
        return this.repository.deleteOne({ _id: id })
    }
}
