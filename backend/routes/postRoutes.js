import express from 'express'
import {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    getUserPosts,
    likePost,
    unlikePost,
    checkLike
} from '../controller/postController.js'
import authM from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(authM, createPost).get(authM, getPosts)
router.route('/:id').get(authM, getPost).post(authM, updatePost).delete(authM, deletePost)
router.get('/individual/:id', authM, getUserPosts)
router.post('/like/:id', authM, likePost)
router.post('/unlike/:id', authM, unlikePost)
router.get('/getlike/:id', authM, checkLike)

export default router