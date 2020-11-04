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



    <div id="Projects">


    <Typography className={classes.title} variant="h4" align="center" component="h2" gutterBottom>
      Project Experience
      </Typography>

      <Typography >

      <ListItemText >
      • Designed a personal website hosted on AWS: leveraging CloudFront, S3 and ACM to host and globally distribute
      the website quickly and securely 
        </ListItemText>

        <ListItemText >
      • Made use of JavaScript to acquire a robust understanding of array use and logic statements to create games and other applications
        </ListItemText>

        <ListItemText >
      • Explored a variety of frameworks to streamline the process, including Express and EJS 
        </ListItemText>
        
        <ListItemText>
      • Currently working on a project to enable the user to create new notes (saving notes to a database) as well as planning creation of a user sign in option
        </ListItemText>

      </Typography>
      
      </div>

      <div id="Career">


      <Typography className={classes.title} variant="h4" align="center" component="h2" gutterBottom>
      Career Summary
      </Typography>

      <Typography className={classes.careerHeading} variant="subtitle1" align="center" gutterBottom>
      MENTOR AND SUPPORT ASSISTANT WITH CERTIFIED AWS INSTRUCTOR (ANDREW BEL-DEAN) | 2019 
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
      KEY ACHIEVEMENTS AND RESPONSIBILITIES
      </Typography>

     
      <ListItemText >
      • Took students through live laboratory procedures, successfully explaining the principles and practice of key technologies
        </ListItemText>

        <ListItemText >
       •  Provisioned labs in Solutions Architect, Sysops, Security Engineering, Advanced Architecting and DevOps methodologies
        </ListItemText>

        <ListItemText >
      • Supported students in creating, developing and delivering projects and presentations 
        </ListItemText>
        
    

      <Typography className={classes.careerHeading} variant="subtitle1" align="center" gutterBottom>
      TECHNICAL SUPPORT MANAGER | 2017 TO 2020 DIXONS CARPHONE

      </Typography>

      <Typography variant="subtitle2" gutterBottom>
      KEY ACHIEVEMENTS AND RESPONSIBILITIES
      </Typography>

      
      <Typography >
      <ListItemText >
      • Managed a skilled team of technical staff in a fast moving and often challenging environment (the busiest tech hub in the country)
        </ListItemText>

        <ListItemText >
        • Supported on-site manufacture repairs for Apple and Samsung and played an integral role in provision of technical support for a
        variety of other manufactures, including Huawei and Sony
        </ListItemText>

        <ListItemText >
        • Provided informed feedback so as to modify and correct any ongoing departmental issues
        </ListItemText>

        <ListItemText >
        • Took a key part in delivering best quality customer services to the highest professional standards
        </ListItemText>

        <ListItemText >
        • Liaised successfully with all internal and external stakeholders, including customers and suppliers
        </ListItemText>
        </Typography>
     
    </div>

    <div id="Education">


    <Typography className={classes.title} variant="h4" align="center" component="h2" gutterBottom>
      Education
      </Typography>
     
      <ListItemText >
       •  University of Westminster | 2012 to 2015 Honours Degree in Business Information Systems | 2:2
        </ListItemText>

      <Typography className={classes.title} variant="h5" align="center" component="h2" gutterBottom>
        Interests
      </Typography>

      <ListItemText >
      • Attending meet up groups, organising social events and participating in Sunday league football with friends
        </ListItemText>
     
        <Typography className={classes.title} variant="h5" align="center" component="h2" gutterBottom>
      Click here to download PDF and here for Word.
      </Typography>
  
      </div>







    </div>
      </div>
  )
}