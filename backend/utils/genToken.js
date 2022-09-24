import jwt from 'jsonwebtoken'

const genToken = async (id) => {
    const token = await jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '10d' })
    return token
}

export default genToken