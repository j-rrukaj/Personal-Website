import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/nightsky.jpg"})`,
    minHeight: '100vh',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },

}));

function Home() {
  const classes = useStyles();
  return (

    <MuiThemeProvider theme={theme}> 
    <div>
    
      <Box align="center" className={classes.root}>
        <Box>
        <Typography  variant="h1" gutterBottom>
         John Rrukaj
        </Typography>
        
        <Typography variant="h5">
          AWS Solutions Architect & SysOps Administrator 
        </Typography>
        <Typography variant="h5">
          React Programmer 
        </Typography>
       
        </Box>
        </Box>

    </div>
    </MuiThemeProvider>

  )
        }

export default Home
