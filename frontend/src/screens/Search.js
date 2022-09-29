import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import PostItem from '../components/PostItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../actions/postActions';

export default function Search(){
    const [res, setRes] = useState([])
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [text, setText] = useState("")
    const { posts } = useSelector(state => state.allPostsGet)
    const dispatch = useDispatch()

    function handleSearch(){
        const postArray = posts.posts
        const p = []
        for (var i=0; i < postArray.length; i++) {
            if (title&&postArray[i].title.includes(title)) {
                if (p.indexOf(postArray[i]) === -1) p.push(postArray[i]);
            }
            if (author&&postArray[i].author === author) {
                if (p.indexOf(postArray[i]) === -1) p.push(postArray[i]);
            }
            if (text&&postArray[i].body.includes(text)) {
                if (p.indexOf(postArray[i]) === -1) p.push(postArray[i]);
            }
        }
        if(p.length ===0)   setRes([])
        else    setRes(p)
    }

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div>
            
            <Header title="Discussion Forum"/>
            <Typography variant='h6' sx={{p:2}}>
                Search with Filters:
            </Typography>
            <Grid container spacing={1} sx={{alignItems:'center', borderBottom: 1, borderColor: 'divider' , pb:2}}>
                <Grid item xs={3}>
                    <TextField
                    id="Title"
                    label="Title"
                    defaultValue=""
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                    id="Author"
                    label="Author"
                    defaultValue=""
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                    id="Text"
                    label="Text"
                    defaultValue=""
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" endIcon={<SearchIcon />} onClick={handleSearch}>
                    Search
                    </Button>
                </Grid>
            </Grid>
            {res && res.map((i)=><PostItem key = {i._id} post={i}/>)}
            
            
        </div>
    )
}