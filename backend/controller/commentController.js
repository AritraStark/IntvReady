import asyncHandler from 'express-async-handler'
import Comments from '../models/commentModel.js'
import Posts from '../models/postModel.js'

//@route GET /api/comments/:postId
//@desc Gets all posts sorted by date
//@access Public

const getComments = asyncHandler(async (req, res) => {
    const pid = req.params.id
    const postExists = await Posts.findById(pid)
    if (postExists) {
        const comments = await Comments.find({ pid: pid }).sort({ date: 'desc' })
        res.json({ comments })
    }
    else {
        res.status(404)
        throw new Error("Post not found")
    }
})


//@route POST /api/comments/:postId
//@desc Posts new comment on a post
//@access Public

const postComment = asyncHandler(async (req, res) => {
    const pid = req.params.id
    const uid = req.user._id
    const author = req.user.name
    const { text } = req.body
    const date = Date.now()
    const postExists = await Posts.findOne({ _id: pid })
    if (postExists) {
        const newComment = new Comments({
            pid,
            uid,
            text,
            author,
            date
        })
        await newComment.save();
        res.json(newComment);
    }
    else {
        res.status(404)
        throw new Error("Post not found")
    }
})


//@route POST /api/comments/like/:postId
//@desc Like a post
//@access Public

const likeComment = asyncHandler(async (req, res) => {
    const cid = req.params.id
    const uid = req.user._id
    const commentExits = await Comments.findById(cid)
    if (commentExits) {
        const updatedComment = await Comments.updateOne({ _id: cid }, { $addToSet: { likes: uid } })
        res.json({ updatedComment })
    }
    else {
        res.status(404)
        throw new Error("Post not found")
    }
})

//@route POST /api/comments/unlike/:postId
//@desc Unlike a post
//@access Public

const unlikeComment = asyncHandler(async (req, res) => {
    const cid = req.params.id
    const uid = req.user._id
    const commentExits = await Comments.findById(cid)
    if (commentExits) {
        const updatedComment = await Comments.updateOne({ _id: cid }, { $pull: { likes: uid } })
        res.json({ updatedComment })
    }
    else {
        res.status(404)
        throw new Error("Post not found")
    }
})

//@route POST /api/comments/getlike/:postId
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

//@route DELETE /api/comments/:id
//@desc Delete post
//@access Private
const deleteComment = asyncHandler(async (req, res) => {
    await Comments.findByIdAndDelete(req.params.id)
    res.json({ msg: "Comment removed" })
})

export {
    getComments,
    postComment,
    deleteComment,
    likeComment,
    unlikeComment,
    checkLike
}