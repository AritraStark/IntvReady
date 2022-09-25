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

function PostItemWithLike({data}) {
  const {success, userDetails} = useSelector(state=>state.login)
  const navigate = useNavigate()
  return (
    <Grid item xs={12} md={6} m={5}> 
        <Card sx={{ display: 'flex', justifyContent:'space-between' }}>
          <CardContent sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
            <Typography component="h2" variant="h5">
              {data.title&&data.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {data.date&&data.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {data.body&&data.body}
            </Typography>
            {success && userDetails._id && <Fab color="primary" aria-label="add">
                <ThumbUpIcon />
            </Fab>}
          </CardContent>
          {data.image&&<CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={data.image}
          />}
        </Card>
    </Grid>
  );
}



export default PostItemWithLike;