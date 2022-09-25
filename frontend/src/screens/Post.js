import React, {useEffect} from 'react'
import Header from '../components/Header'
import Typography from '@mui/material/Typography';
import CommentItem from '../components/CommentItem';
import AddComment from '../components/AddComment';
import PostItemWithLike from '../components/PostItemWithLike';
import { useSelector,useDispatch } from 'react-redux';
import { getPost } from '../actions/postActions';
import { getComments } from '../actions/commentActions';
import { useParams } from 'react-router-dom';

export default function Post(){
    const dispatch = useDispatch()
    const {id} = useParams()
    const {post} = useSelector(state=>state.postGet)
    const {comments} = useSelector(state=>state.commentsGet)
    const {success, userDetails} = useSelector(state=>state.login)
    useEffect(()=>{
        dispatch(getPost(id))
        dispatch(getComments(id))
    },[dispatch, id])

    return(
        <div>
            <Header title='Discussion Forum'/>
            {post&&<PostItemWithLike data = {post.post}/>}
            <Typography variant="h5" gutterBottom>
                Comments :
            </Typography>
            {comments && comments.comments.map((comment)=><CommentItem data = {comment} />)}
            {success&&userDetails._id && <AddComment id={id}/>}
        </div>
    )
}