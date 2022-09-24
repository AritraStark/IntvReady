import express from 'express'
import {
    getComments,
    postComment,
    deleteComment,
    likeComment,
    unlikeComment,
    checkLike
} from '../controller/commentController.js'
import authM from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/:id').get(authM, getComments).post(authM, postComment).delete(authM, deleteComment)
router.post('/like/:id', authM, likeComment)
router.post('/unlike/:id', authM, unlikeComment)
router.get('/getlike/:id', authM, checkLike)

export default router