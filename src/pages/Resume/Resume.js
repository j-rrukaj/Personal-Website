import React, { Component } from "react";
import Sidebar from "./Sidebar"
import "./Resume.css"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ListItemText, MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  backgroundImg: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black"
  },
  title: {
    padding: "15px",
    padding: theme.spacing(8, 0, 6),
  },
  img: {
    width: "120px",
    height: "130px",
    paddingBottom: "20px"
  },
  imagesCenter: {
    display: "flex",
    justifyContent: "center",
  },
  careerHeading: {
    padding: "20px",     
    },
  main: {
    padding:" 0 30px",
  }

}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Resume() {
  const classes = useStyles();
  return (


  

    <div >

      <Sidebar />
    
      <div className="page">

     
      <Typography className={classes.title} variant="h2" align="center"  gutterBottom>
          Resume
        </Typography>





      <div  id="Summary">
        

     <Typography className={classes.title} variant="h5" align="center"  gutterBottom>
          Professional Summary
        </Typography>

        <Typography variant="body2" gutterBottom>
        Seeking a dynamic new role as a junior AWS engineer or a junior React programmer, passionate and goal driven individual
        with a proven track record of delivering high quality technical output, analysis and client engagement services to the
        best professional standards. Well organised and with a keen attention to detail that ensures completion of all tasks on
        time and meticulously to specification. Excellent communication and interpersonal skills, able to work well either as
        part of a collaborative team or autonomously when required and thriving in challenging and fast-moving environments by
        prioritising tasks and targets with outstanding time management skills. Now seeking a new challenge in Cloud Computing
        that will make the most of this skill set, preferably in a Junior AWS Architect or Junior React Developer role.
        </Typography>

      
        </div>


      <div id="Skill Set">


        <Typography className={classes.title} variant="h5"  align="center" gutterBottom>
         Key Skill Set
        </Typography>
        

        <Typography variant="body2" gutterBottom >

        <ListItemText >
          • AWS Certified Solutions Architect and Systems Administrator and currently preparing to complete further certifications
          </ListItemText>

          <ListItemText >
          • Making effective use of JavaScript, Node and React, in addition to other languages and frameworks
          </ListItemText>

          <ListItemText >
          • Making effective use of JavaScript, Node and React, in addition to other languages and frameworks
          </ListItemText>
          
          <ListItemText>
          • Leading and working as an integral member of cohesive and target driven teams, delivering quality outcomes within an environment of excellence
          </ListItemText>

          <ListItemText>
          • Nurturing and maintaining robust and resilient, long term relationships as a foundation for success
          </ListItemText>

          <ListItemText>
          • Strong technical judgment and operational acumen, coupled with advanced analytical and insight skills
          </ListItemText>

          <ListItemText>
          • Excellent problem-solving capabilities, adopting a solution based and logical approach to resolving even the most complex issues
          </ListItemText>

        </Typography>

        </div>



        <div id="AWS">


        <Typography className={classes.title} variant="h5"  align="center" gutterBottom>
        AWS Aptitudes
        </Typography>

      <Typography >

      <ListItemText >
         •  Created and rolled out multiple VPC’s, including linking together subnets across various AZ’s and routes 
        </ListItemText>

        <ListItemText >
        • Provisioned several EC2 instances in an autoscaling group: completing load testing to accurately determine
        response times to the traffic spike using CloudWatch and then successfully tested the speed at which instances
        could be terminated in response to a decline in traffic 
        </ListItemText>

        <ListItemText >
        • Created CloudFormation templates which provisioned and deployed resources like VPC, EC2, RDS and more
        </ListItemText>
        
        <ListItemText>
        • Provisioned RDS Multi-AZ to secure a fully accessible environment: testing what might happen if an AZ goes down
        (manually shutting down the primary database)
        </ListItemText>

      </Typography>

      </div>



    <div id="Certifications">

   
    <Typography className={classes.title} variant="h4" align="center" component="h2" gutterBottom>
      Professional Certifications and Training
        </Typography>

      <div className={classes.imagesCenter}>
       <img className={classes.img} src="images/solutions-badge.png" alt=""/>
       

       <img className={classes.img} src="images/sysops-badge.png" alt=""/>
      </div>



    </div>


    </div>



      </div>
      
  
  )
}