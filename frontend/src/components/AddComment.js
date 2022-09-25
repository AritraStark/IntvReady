import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { createComment } from '../actions/commentActions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AddComment({id}) {
  const dispatch = useDispatch()
  const [text, setText] = React.useState()
  const navigate = useNavigate()

  const {success} = useSelector(state=>state.commentCreate)

  function handleCommentClick(){
    dispatch(createComment(id, text))
  }

  React.useEffect(()=>{
    if(success === true) navigate(`/post/${id}`)
  },[success, navigate])
  return (
    <Box
      sx={{
        maxWidth: '100%',
        py:'1em'
      }}
    >
        <Typography variant="h5" >
            Add comment
        </Typography>
        <Grid container spacing={2} sx = {{padding:'2rem'}}>
            <Grid item xs={10}>
                <TextField fullWidth label="Comment" id="fullWidth" onChange={(e)=>setText(e.target.value)}/>
            </Grid>
            <Grid item xs={2}>
                <Fab color="primary" aria-label="add" onClick={handleCommentClick}>
                    <AddCommentIcon />
                </Fab>
            </Grid>
            
        </Grid>
        
    </Box>
  );
}
