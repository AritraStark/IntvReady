import React, {useEffect} from 'react'
import Header from '../components/Header'
import Typography from '@mui/material/Typography';
import CommentItem from '../components/CommentItem';
import AddComment from '../components/AddComment';
import PostItemWithLike from '../components/PostItemWithLike';
import { useSelector,useDispatch } from 'react-redux';
import { getPost, likePost } from '../actions/postActions';
import { getComments, likeComment } from '../actions/commentActions';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createComment } from '../actions/commentActions';

export default function Post(){
    const dispatch = useDispatch()
    const {id} = useParams()
    const {post} = useSelector(state=>state.postGet)
    const {comments} = useSelector(state=>state.commentsGet)
    const {success, userDetails} = useSelector(state=>state.login)
    const navigate = useNavigate()
    const commentCreateStatus = useSelector(state=>state.commentCreate)
    const postLikeStatus = useSelector(state=>state.postLike)
    const commentLikeStatus = useSelector(state=>state.commentLike)
    const [text, setText] = React.useState()

    function handleFormData(e){
        setText(e.target.value)
    }

    function handleAddCommentClick(){
        dispatch(createComment(id, text))   
    }

    function handleLikePostClick(){
        dispatch(likePost(id))
    }



    useEffect(()=>{
        if(commentCreateStatus.success || postLikeStatus.success){
            navigate('/post/'+id)
        }

        dispatch(getPost(id))
        dispatch(getComments(id))

    },[dispatch, id, commentCreateStatus,postLikeStatus, navigate])

    return(
        <div>
            <Header title='Discussion Forum'/>
            {post&&<PostItemWithLike data = {post.post} handleLikePostClick={handleLikePostClick}/>}
            <Typography variant="h5" gutterBottom>
                Comments :
            </Typography>
            {comments && comments.comments.map((comment)=><CommentItem data = {comment}/>)}
            {success&&userDetails._id && <AddComment id={id} text ={text} handleCommentClick = {handleAddCommentClick} handleFormData={handleFormData}/>}            
        </div>
    )
}