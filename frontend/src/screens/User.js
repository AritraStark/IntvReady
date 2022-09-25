import React from 'react'
import Header from '../components/Header'
import PostItem from '../components/PostItem'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

const post = {
    id: 1010101,
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  }

export default function User(){
    const navigate = useNavigate()
    return(
        <div>
            <Header title = "Discussion Forum"/>
            <ButtonGroup size='large' variant="text" aria-label="text button group" >
                <Button sx={{ px:'2rem' }} onClick={()=>navigate('/post/new')}>New Post</Button>
                <Button sx={{ px:'2rem' }} onClick={()=>navigate('/post/search')}>Search Posts</Button>
            </ButtonGroup>
            <PostItem post = {post} />
            <PostItem post = {post} />
            <PostItem post = {post} />
        </div>
    )
}