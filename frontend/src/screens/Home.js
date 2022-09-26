import React, { useEffect } from 'react'
import Header from '../components/Header'
import PostItem from '../components/PostItem'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../actions/postActions';
import { useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

export default function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { posts } = useSelector(state => state.allPostsGet)
    const { success } = useSelector(state => state.login)

    function handleLogout(){
        dispatch(logout())
    }
    useEffect(() => {
        if (!success) navigate('/')
        dispatch(getAllPosts())
        
    }, [success, dispatch, navigate])

    return (
        <div>
            <Header handleLogout={handleLogout}/>
            <ButtonGroup size='large' variant="text" aria-label="text button group" >
                <Button sx={{ px: '2rem' }} onClick={() => navigate('/post/new')}>New Post</Button>
                <Button sx={{ px: '2rem' }} onClick={() => navigate('/post/search')}>Search Posts</Button>
            </ButtonGroup>
            {posts.posts && posts.posts.map((post) => <PostItem post={post} />)}

        </div>
    )
}