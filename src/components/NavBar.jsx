import { AppBar, Box, styled, Toolbar } from "@mui/material";
import React from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});
const StyledAppBar = styled(AppBar)({
  backgroundImage: `url(${"./photos/backgroud.png"})`,
});
const NavBar = () => {
  return (
    <Box >
      <Box position="sticky">
      <StyledAppBar >
        <StyledToolbar>
            <a href="/">
              <img src="./photos/logo.png" alt="./photos/logo.png" />
            </a>
        </StyledToolbar>
      </StyledAppBar>
      </Box>  
    </Box>
  );
};

export default NavBar;
