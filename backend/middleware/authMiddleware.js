import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Users from '../models/userModel.js'

const authM = asyncHandler(async (req, res, next) => {
    let token = req.headers['x-auth']

    if (token) {
        try {
            //Decoding the jwt token and requiring the payload
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //Querying the database to find the user of the token
            req.user = await Users.findOne({ _id: decoded.id }).select('-password')
            try {
                console.log('Authenticated')
            } catch (error) {
                console.log(error)
            }

            next()
        } catch (error) {
            res.status(401)
            console.log(error)
            throw new Error('Token Invalid')
        }
    }
    else if (!token) {
        res.status(401)
        throw new Error('No Token')
    }
})

export default authM