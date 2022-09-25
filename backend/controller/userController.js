import asyncHandler from 'express-async-handler'
import Posts from '../models/postModel.js'
import Users from '../models/userModel.js'
import { hash, checkPass } from '../utils/genHash.js'
import genToken from '../utils/genToken.js'


//@route GET /api/users/login
//@desc Login
//@access Private
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //Find user in database
    const user = await Users.findOne({ email })
    //Comparing and verifiying user
    const token = await genToken(user._id)

    if (user && await (user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: token
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid credentials")
    }
})


// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUser = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

//@route POST /api/users
//@desc Create new user
//@access Public
const createUser = asyncHandler(async (req, res) => {
    const { name, email, password, description } = req.body;
    //Checking if user exists
    const userExists = await Users.findOne({ email: email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Initiate new user entry in database
    const hPass = await hash(password)

    const newUser = new Users({
        name,
        email,
        password
    })
    const token = await genToken(newUser._id)
    if (await newUser.save()) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            password: hPass,
            description: description,
            token: token
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid data")
    }

})


//@route POST /api/user/:id
//@desc Update user
//@access Private
const updateUser = asyncHandler(async (req, res) => {
    const { name, email, password, description } = req.body;

    let user = await Users.findOne({ _id: req.params.id })
    if (!user) {
        res.status(404)
        throw new Error("User not found")
    }
    else {
        const hPass = hash(password)
        user = await Users.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                name,
                email,
                hPass,
                description
            },
            {
                new: true
            })

        res.json(user);
    }
})

//@route DELETE /api/user/:id
//@desc Delete user
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
    await Users.findByIdAndDelete(req.params.id)
    res.json({ msg: "User removed" })
})


//@route GET /api/user/:id/posts
//@desc Get posts of a user
//@access Private

export {
    loginUser,
    getUser,
    createUser,
    updateUser,
    deleteUser
}