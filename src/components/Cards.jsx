import { CardMedia, Paper } from '@mui/material';
import React from 'react';

const Cards = (props) => {
  return (
    <Paper elevation={8}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="420"
        image={props.image}
      />
    </Paper>
  )
}

export default Cards;
