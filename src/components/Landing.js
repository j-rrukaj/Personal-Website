import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  root: {
    
    minHeight: '100vh',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    
  },
  
title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: theme.spacing(35, 0, 6, 0),
    color: "black",

  }
 
  
}));

function Landing() {
  const classes = useStyles();
  return (

  
    <main>
    <video className={classes.root} src="http://react-personal-website.s3.amazonaws.com/hero.mp4" autoPlay loop muted/> 


    {/* Hero unit */}
    <div className={classes.title}>
      <Container maxWidth="sm">
      
        <Typography component="h1" variant="h1" gutterBottom>
         John Rrukaj
        </Typography>
        <Typography variant="h5"  paragraph>
          AWS Solutions Architect & SysOps Administrator 
        </Typography>
      </Container>
    </div>
  </main>

  )
        }

export default Landing
