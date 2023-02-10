export class MessageService {
    constructor(model) {
        this.repository = model
    }

    find = (criteria = {}) => {
        return this.repository.find(criteria)
    }

    findOne = async (criteria = {}) => {
        return this.repository.findOne(criteria)
    }

    findOneByEmail = async (email) => {
        return this.repository.findOne({ email })
    }

    create = async (dto) => {
        const model = new this.repository(dto)
        return model.save()
    }

    update = async (criteria = {}, dto) => {
        return this.repository.findOneAndUpdate(criteria, dto, { new: true })
    }

    delete = async (criteria = {}) => {
        return this.repository.deleteOne(criteria)
    }
}
