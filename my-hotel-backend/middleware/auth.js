const jwt = require('jsonwebtoken')
const { User, Booking } = require('../model/index')

const auth = async(req, res, next) => {
    const accessToken = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(accessToken, process.env.JWT_KEY)
    try {
        const user = await User.findById(data._id).populate("history");
        if (!user) {
            return res.status(404).json("Không tìm thấy người dùng");
        }
        req.user = user;
        req.token = accessToken;
        next()
    } catch (error) {
        return res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth
