import React from 'react'
import Header from '../components/Header'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import PostItem from '../components/PostItem';

const post = {
    id: 1010101,
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  }

export default function Search(){
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
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                    id="Author"
                    label="Author"
                    defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                    id="Text"
                    label="Text"
                    defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" endIcon={<SearchIcon />}>
                    Search
                    </Button>
                </Grid>
            </Grid>
            
            <PostItem post = {post}/>
            
            
        </div>
    )
}