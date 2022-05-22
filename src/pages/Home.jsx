import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Cards from '../components/Cards'
const image1="./photos/film1.png";
const image2="./photos/film2.png";
const image3="./photos/film3.png";
const image4="./photos/film4.png";
const image5="./photos/film5.png";
const image6="./photos/film6.png";
export const Home = () => {
  return (
    <Box pt={17} pb={0.5}>
    <Stack direction="row" spacing={1}>
    <Cards image={image1}/>
    <Cards image={image2}/>
    <Cards image={image3}/>
    <Cards image={image4}/>
    <Cards image={image5}/>
    <Cards image={image6}/>
    </Stack>
    </Box>
    
  )
}


