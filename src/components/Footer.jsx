import styled from '@emotion/styled';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
const StyledAppBar = styled(AppBar)({
  backgroundImage: `url(${"./photos/backgroud.png"})`,
});
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});
const Footer = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Typography>
          A long time ago in a galaxy far, far away…
          </Typography>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  )
}

export default Footer;
