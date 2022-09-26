import React, { useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../actions/postActions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function SignUp() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {success,post} = useSelector(state=>state.postCreate)

  function handleNewPostClick(){
    navigate('/')
    dispatch(createPost(title,body))
    setTitle("")
    setBody("")
  }


    useEffect(() => {
        if(success)
        navigate('/')
    }, [success])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Post
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Post Title"
                  label="Post Title"
                  name="Post Title"
                  autoComplete="Post Title"
                  onChange={(e)=>{
                    setTitle(e.target.value)
                  }}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                    id="Post Body"
                    label="Post Body"
                    multiline
                    fullWidth
                    rows={4}
                    defaultValue=""
                    variant="standard"
                    onChange={(e)=>{
                      setBody(e.target.value)
                    }}
                />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" component="label" color='secondary'>
                        Upload
                        <PhotoCamera />
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>

                
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleNewPostClick}
            >
              Add Post
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='error'
              onClick={()=>navigate('/')}
            >
              Cancel
            </Button>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}