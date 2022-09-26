import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector,useDispatch } from 'react-redux';
import { likeComment } from '../actions/commentActions';


export default function CommentItem({data}) {
  const {success, userDetails} = useSelector(state=>state.login)
  const [likesArray, setLikesArray] = React.useState(data.likes)

  return (
    <Card sx={{ minWidth: 275, display: 'grid', justifyContent: 'space-around' }}>
      <CardContent sx={{display: 'flex' }}>
        <CardContent sx={{display: 'grid' , maxWidth:'40rem'}}>
        { success && userDetails._id && <Fab color="primary" aria-label="add" onClick={()=>likeComment(data._id)}>
              <ThumbUpIcon />
          </Fab>}
          {likesArray.length}
        </CardContent>
        <CardContent sx={{display: 'grid' , maxWidth:'40rem'}}>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.text && data.text}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.author && data.author}
          </Typography>
        </CardContent>
        <CardContent sx={{display: 'grid' , maxWidth:'40rem'}}>
          {success && userDetails._id && <Fab color="primary" aria-label="add">
              <DeleteIcon />
          </Fab>} 
        </CardContent>
      </CardContent>
      
    </Card>
  );
}
