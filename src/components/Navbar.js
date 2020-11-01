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
import { useState, useEffect } from 'react';
import './Navbar.css';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appbar: {
    background: "none",
   },
   appbarTitle: {
    flexGrow: 1,
    display: 'flex',
    fontFamily: "AudioWide",
    fontSize: "2rem",
   
  },

}));

export default function Navbar() {
  const classes = useStyles();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    
    <div>
    <AppBar  className={classes.appbar} elevation={0} >
      <Toolbar >
       
      <Typography className={classes.appbarTitle} >
          <Link style={{ textDecoration: 'none', color: "#fff" }} to="/" onClick={closeMobileMenu}>Skywalker</Link>
          </Typography>


          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <Button className='nav-item'>
          <Link className='nav-links' onClick={closeMobileMenu} to="/">Home</Link>
          </Button>
          <Button className='nav-item'>
          <Link className='nav-links' onClick={closeMobileMenu} to="/resume">Resume</Link>
          </Button>

          <Button className='nav-item'>
          <Link className='nav-links' onClick={closeMobileMenu} to="/projects">Projects</Link>
          </Button>

          <Button className='nav-item'>
          <Link className='nav-links' onClick={closeMobileMenu} to="/contact">Contact</Link>
          </Button>

          </ul>

      </Toolbar>
    </AppBar>
  </div>
);
}