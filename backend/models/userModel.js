import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

//Schema modelled
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
})

userSchema.methods.matchPassword = async function (enterPass) {
    return await bcrypt.compare(enterPass, this.password)
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const Users = mongoose.model('Users', userSchema)
export default Users

