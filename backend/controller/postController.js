import asyncHandler from 'express-async-handler'
import Posts from '../models/postModel.js'
import Users from '../models/userModel.js'

//@route GET /api/posts
//@desc Gets all posts sorted by date
//@access Public
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Posts.find({}).sort({ date: 'desc' })
    res.json({ posts })
})

//@route GET /api/posts/:id
//@desc Gets post by id
//@access Public
const getPost = asyncHandler(async (req, res) => {
    const post = await Posts.findById(req.params.id)
    if (post) {
        res.json({ post })
    }
    else {
        res.status(404)
        throw new Error("Product not found")
    }
})


//@route POST /api/posts
//@desc Create new post
//@access Private
const createPost = asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const id = req.user._id;
    const author = req.user.name
    const date = Date.now()
    const user = await Users.findOne({ _id: id })
    if (user) {
        const newPost = new Posts({
            user,
            title,
            body,
            date,
            author
        })
        await newPost.save();
        res.json(newPost);
    }
    else {
        res.status(404)
        throw new Error("User not found")
    }
})


//@route POST /api/posts/:id
//@desc Update post
//@access Private
const updatePost = asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const date = Date.now()

    let post = await Posts.findOne({ _id: req.params.id })
    if (!post) {
        res.status(404)
        throw new Error("Post not found")
    }
    else {
        post = await Posts.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                title,
                body,
                date
            },
            {
                new: true
            })

        res.json(post)
    }
})

//@route DELETE /api/posts/:id
//@desc Delete post
//@access Private
const deletePost = asyncHandler(async (req, res) => {
    await Posts.findByIdAndDelete(req.params.id)
    res.json({ msg: "User removed" })
})

//@route GET /api/posts/individual/:id
//@desc Get users post
//@access Private
const getUserPosts = asyncHandler(async (req, res) => {
    const id = req.params.id
    const userPosts = await Posts.find({ user: id })
    try {
        res.status(200)
            .json(userPosts)
    } catch (error) {
        res.status(400)
        throw new Error(error.message ? error.message : error)
    }
})

//@route POST /api/comments/like/:postId
//@desc Like a post
//@access Public

const likePost = asyncHandler(async (req, res) => {
    const pid = req.params.id
    const uid = req.user._id
    const postExists = await Posts.findById(pid)
    if (postExists) {
        const updatedPost = await Posts.updateOne({ postId: pid }, { $addToSet: { likes: uid } })
        res.json({ updatedPost })
    }
    else {
        res.status(404)
        throw new Error("Post not found")
    }
})

//@route POST /api/comments/unlike/:postId
//@desc Unlike a post
//@access Public

const unlikePost = asyncHandler(async (req, res) => {
    const pid = req.params.id
    const uid = req.user._id
    const postExists = await Posts.findById(pid)
    if (postExists) {
        const updatedPost = await Posts.updateOne({ postId: pid }, { $pull: { likes: uid } })
        res.json({ updatedPost })
    }
    else {
        res.status(404)
        throw new Error("Post not found")
    }
})

//@route POST /api/post/getlike/:postId
//@desc Unlike a post
//@access Public

const checkLike = asyncHandler(async (req, res) => {
    const pid = req.params.id
    const uid = req.user._id
    const postExists = await Posts.findById(pid)
    if (postExists) {
        const isLiked = await Comments.find({ "likes": uid }, (err, likeInfo) => {
            if (err) {
                res.status(400)
                throw new Error("Comment find related error")
            }
            if (isLiked) {
                res.json({ found: true, isLiked })
            }
            else {
                res.json({ found: false, isLiked })
            }
        })
    }
    else {
        res.status(404)
        throw new Error("Post not found")
    }
})

export {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    getUserPosts,
    likePost,
    unlikePost,
    checkLike
}