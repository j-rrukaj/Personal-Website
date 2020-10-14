import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  
   root: {
      flexGrow: 1,
      },

    appbarTitle: {
        flexGrow: 1,
        display: 'flex',
        fontFamily: "AudioWide",
        color: "black",
        fontSize: "2rem"
      },
  
    appbar: {
      background: "none",
      padding: theme.spacing(1, 1, 5, 0),
     },

     menuButton: {
      marginRight: theme.spacing(2),
      color: "black",
      fontSize: "2rem"
    },
  
}));

export default function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed" elevation={0}>
        <Toolbar>
   
          <Typography  variant="body2" className={classes.appbarTitle}>
          <Link style={{ textDecoration: 'none', color: "black" }} to="/">Skywalker</Link>
          </Typography>
            <div>
    
            <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={handleMenu}
              >
            <MenuIcon />
              </IconButton>
              <Menu
               
               id="simple-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              
                
                <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: 'none', color: "black" }} to="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: 'none', color: "black" }} to="/resume">Resume</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: 'none', color: "black" }} to="/projects">Projects</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: 'none', color: "black" }} to="/contact">Contact</Link>
                </MenuItem>

 

              
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
  }