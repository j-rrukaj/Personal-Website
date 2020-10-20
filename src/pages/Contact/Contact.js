import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    
  }));

function Contact() {
    const classes = useStyles();
    return (
        <div>
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
        
         <h1 align="center">Test</h1>

         
        </Container>
      </main>

    </React.Fragment>
        </div>
    )
}

export default Contact
