import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    title: {
      fontSize: "2rem",
      textAlign: 'center',
    },
    text: {
      textAlign: 'center',
    }
  }));

function Resume() {
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
              Resume
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
        
          {/* End hero unit */}

          <Grid container spacing={4}>

          <Typography className={classes.title}  gutterBottom>
          Summary
          </Typography>

          <Typography  className={classes.text} variant="body1" gutterBottom>
          AWS Certified Solutions Architect and SysOps Administrator with a proven track record of 
          delivering high quality technical output, analysis and client engagement services to the 
          best professional standards. Well organised and with a keen attention to detail that 
          ensures completion of all tasks on time and meticulously to specification. Excellent 
          communication and interpersonal skills, able to work well either as part of a 
          collaborative team or autonomously when required and thriving in challenging and fast 
          moving environments by prioritising tasks and targets with outstanding time management 
          skills. Now seeking a new challenge in Cloud Computing that will make the most of this 
          skill set, preferably in a Junior AWS Architect or Junior React Developer.
            </Typography>


            <Typography className={classes.title}  gutterBottom>
            Key Skill Set
          </Typography>


          <Typography  variant="body1" align="center" gutterBottom>
  
            <ListItem>
            •	Passionalty committed to pursuing a new career in Cloud Computing.
            </ListItem>
            <ListItem>
            •	AWS Certified Solutions Architect and Systems Administrator and currently preparing to complete further certifications.
            </ListItem>
            <ListItem>
            •	Making effective use of JavaScript, Node and React, in addition to other languages and frameworks.
            </ListItem>
            <ListItem>
            •	Leading and working as an integral member of cohesive and target driven teams, delivering quality outcomes within an environment of excellence.
            </ListItem>
            <ListItem>
            •	Nurturing and maintaining robust and resilient, long term relationships as a foundation for success.
            </ListItem>
            <ListItem>
            • Strong technical judgment and operational acumen, coupled with advanced analytical and insight skills.
            </ListItem>
            <ListItem>
            •	Excellent problem solving capabilities, adopting a solutions based and logical approach to resolving even the most complex issues.
            </ListItem>

            </Typography>
            
            
            <Typography className={classes.title}  gutterBottom>
            AWS Aptitudes
          </Typography>
            
          •	Created and rolled out multiple VPC’s, including linking together subnets across various AZ’s and routes 
•	Adopted IGW and Nat-gateway for private subnets required to access the Internet
•	Provisioned several EC2 instances as part of an autoscaling group: completing load testing to accurately determine response times to the traffic spike using CloudWatch
•	Successfully tested the speed at which instances could be terminated in response to a decline in traffic 
•	Provisioned RDS Multi-AZ to secure a fully accessible environment: testing what might happen if an AZ goes down (manually shutting down the primary database)


          <Typography  variant="body1" align="center" gutterBottom>
          <ListItem>
           
            </ListItem>
            
            <ListItem>
           
           </ListItem>

           <ListItem>
           
           </ListItem>
           <ListItem>
           
           </ListItem>
           


          </Typography>


          </Grid>
        </Container>
      </main>

    </React.Fragment>
  );
        </div>
    )
}

export default Resume
