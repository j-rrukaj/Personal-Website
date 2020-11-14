import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import "./Contact.css"

import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai"

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    heroContent: {
    padding: theme.spacing(12, 0, 6),
      color: "#FFFFFF",
      
    },
    img: {
      minHeight: "100vh",
      backgroundImage: `url(${process.env.PUBLIC_URL + "/images/laptop.jpg"})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      
    },
   
    
    profileImg: {
      height: "25vh",
      width: "25vh",
      borderRadius: "50%",
      shapeOutside: "circle()",
      
      
      
      
    },
    text: {
      
      display: "inline-block"
      
      }
  
    
  }));

function Contact() {
    const classes = useStyles();
    return (

  
    
         <div className={classes.img}>


        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <Typography className={classes.title} align= "center" variant="h2"  gutterBottom>
          Contact
        </Typography>
            <Typography variant="h5" align= "center" color="textSecondary" paragraph >
              Details Below
            </Typography>
          </Container>
        </div>





        
         <Container align= "center">

         <img className={classes.profileImg} src="/images/profile.jpg" alt=""/>
        

  
        <div className={classes.text}>
       
         <Typography variant="h5"  gutterBottom>
        <Ai.AiTwotoneMail className="icons"/>
         
        E-mail: Johnrrukaj@gmail.com
        </Typography>
         <br />

         <Typography variant="h5"  gutterBottom>
         <Ai.AiFillMobile className="icons"/>
         Mobile: 07432481567
         </Typography>

         <br />

         <Typography variant="h5"  gutterBottom>
         <Ai.AiFillLinkedin className="icons"/>
         LinkedIn: in/JohnRrukaj
         </Typography>

         <br />

         <Typography variant="h5"  gutterBottom>
         <Ai.AiFillGithub className="icons" />
         Github: Github.com/j-rrukaj
         </Typography>

        </div>
        </Container>
        </div>

          
      
     
   
    
    )
}

export default Contact



 