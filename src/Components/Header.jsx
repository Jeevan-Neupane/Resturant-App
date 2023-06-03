//*Inorder to open and close the draawer we need useState
import { useState } from "react";
import "../Styles/HeaderStyle.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerOpen}>
      <Typography
        color="goldenrod"
        variant="h6" //*This will give you the style of h6
        component="div" //*What really this is
        sx={{ fontWeight: 600, flex: 1, textAlign: "center" }}
        my={1.5}
      >
        <FastfoodIcon />
        My Reasturant
      </Typography>
      <Divider />


      <ul className="mobile-navigation">
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" >Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="goldenrod"
            variant="h6" //*This will give you the style of h6
            component="div" //*What really this is
            sx={{ fontWeight: 600, flex: 1 }}
          >
            <FastfoodIcon />
            My Reasturant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerOpen}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
              background:'#000',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header;
