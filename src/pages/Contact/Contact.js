import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./Contact.css"
import * as Ai from "react-icons/ai"


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
         <a className="contact-links" href="https://www.linkedin.com/in/john-rrukaj/" target="_blank">LinkedIn: in/JohnRrukaj</a>
         
         </Typography>

         <br />

         <Typography variant="h5"  gutterBottom>
         <Ai.AiFillGithub className="icons" />
         <a className="contact-links" href="https://github.com/j-rrukaj" target="_blank">Github: Github.com/j-rrukaj</a>
         
         </Typography>

        </div>
        </Container>
        </div>

          
      
     
   
    
    )
}

export default Contact



 