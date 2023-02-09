import jwt from "jsonwebtoken"

class JWT {
    static async generateToken(object) {
        return jwt.sign(object, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        })
    }

    static async verify(token) {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}

export { JWT }
