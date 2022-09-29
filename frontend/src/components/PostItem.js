import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

function PostItem(props) {
  const { post } = props;
  const navigate = useNavigate()
  return (
    <Grid item xs={12} md={6} m={5}>
      <CardActionArea component="a" href={"/post/"+post._id}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography component="h6" variant="h6">
              {post.author}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date.substring(0,10)}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary" onClick={()=>navigate('/post/'+post.id)}>
              Continue reading...
            </Typography>
          </CardContent>
          <img src={post.baseImage} height="200px" alt='img'/>
        </Card>
      </CardActionArea>
    </Grid>
  );
}



export default PostItem;