import { JWT } from "../../helpers/jwt.js"
import { Password } from "../../helpers/password.js"

export class AuthController {
    constructor(service) {
        this.usersService = service
    }

    login = async (req, resp) => {
        const { email } = req.body
        const { password } = req.body
        const user = await this.usersService.findOneByEmail(email)
        if (!user || !password)
            return resp.status(401).json({ message: "unauthorized" })

        if (await Password.compare(password, user.password)) {
            let { password, ...data } = user._doc
            data["token"] = await JWT.generateToken({
                _id: user.id,
                email: user.email,
            })
            return resp.json({ data: data })
        }
        return resp.status(403).json({ message: "forbidden" })
    }
}
