import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useSelector} from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';

function PostItemWithLike({data, handleLikePostClick}) {
  const {success, userDetails} = useSelector(state=>state.login)
  const navigate = useNavigate()

  return (
    <Grid item xs={12} md={6} m={5}> 
        <Card sx={{ display: 'flex', justifyContent:'space-between' }}>
          <CardContent sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
            <Typography component="h2" variant="h5">
              {data.title&&data.title}
            </Typography>
            <Typography component="h6" variant="h6">
              {data.author&&data.author}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {data.date&&data.date.substring(0,10)}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {data.body&&data.body}
            </Typography>
            <Grid gap={2} sx={{ justifyContent:'space-between'}}>
              {success && userDetails._id && <Fab color="primary" aria-label="add" sx={{mx:2}} onClick={handleLikePostClick}>
                  <ThumbUpIcon />
              </Fab>}
              {data.likes&&data.likes.length}
              {userDetails._id === data.user && <Fab color="primary" aria-label="add" sx={{mx:2}}>
                  <DeleteIcon />
              </Fab>}
            </Grid>
            
          </CardContent>
          {data.baseImage&&<img src={data.baseImage}  height="200px" />}
        </Card>
    </Grid>
  );
}



export default PostItemWithLike;