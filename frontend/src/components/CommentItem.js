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

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Fab color="primary" aria-label="add">
            <ThumbUpIcon />
        </Fab>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Author
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Comment Body
        </Typography>
        <Fab color="primary" aria-label="add">
            <DeleteIcon />
        </Fab>
      </CardContent>
      
    </Card>
  );
}
