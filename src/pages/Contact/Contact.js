import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    img: {
      minHeight: "100vh",
      backgroundImage: `url(${process.env.PUBLIC_URL + "/images/telephone.jpg"})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "black"
    },
    profileImg: {
      height: "25vh",
      width: "25vh",
      borderRadius: "50%",
      float: "none",
      shapeOutside: "circle()"
    },
    text: {
      paddingLeft: "10px",
      
     

      }
  
    
  }));

function Contact() {
    const classes = useStyles();
    return (

  
      <MuiThemeProvider theme={theme}> 
         <div className={classes.img}>

         <div >
         <img className={classes.profileImg} src="/images/profile.jpg" alt=""/>
         </div>
                 
        

         
  
        <div className={classes.text}>
        <Typography variant="h5"  gutterBottom>E-mail: Johnrrukaj@gmail.com</Typography>
         <br />
         <Typography variant="h5"  gutterBottom>Mobile: 07432481567</Typography>
         <br />
         <Typography variant="h5"  gutterBottom>LinkedIn: in/JohnRrukaj</Typography>
         <br />
         <Typography variant="h5"  gutterBottom>Github: Github.com/j-rrukaj</Typography>
        </div>

          
         </div>
     
         </MuiThemeProvider> 
    
    )
}

export default Contact



 