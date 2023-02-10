import { JWT } from "../../../helpers/jwt.js"

async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ message: "unauthorized" })
    }

    const bearerToken = authHeader.split(" ")[1]
    try {
        const payload = await JWT.verify(bearerToken)
        req.body.userId = payload.sub
        req.body.email = payload.email
        if (!req.body.userId || !req.body.email)
            throw new Error("jwt malformed")
        return next()
    } catch (error) {
        return res
            .status(403)
            .json({ message: "forbidden", error: error.message })
    }
}

export { authMiddleware }
