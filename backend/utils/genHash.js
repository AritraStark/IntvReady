import bcrypt from 'bcryptjs'

export const hash = async (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hashedPass = await bcrypt.hash(password, salt)
    return hashedPass
}

export const checkPass = async (enteredPass, presentPass) => {
    const res = await bcrypt.compare(enteredPass, presentPass)
    return res
}