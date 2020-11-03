import React, { Component } from "react";
import Sidebar from "./Sidebar"
import "./Resume.css"


import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ListItemText, MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';



export default function Resume() {
  
  return (

    <div>

      <Sidebar />
    
     
      
        <h1 className="page">
          Resume
        </h1>



        <div  id="summary">

     <Typography  variant="h5" align="center"  gutterBottom>
          Professional Summary
        </Typography>

        <Typography variant="body2" gutterBottom>
        Seeking a dynamic new role as a junior AWS engineer or a junior React programmer, passionate and goal driven individual
        with a proven track record of delivering high quality technical output, analysis and client engagement services to the
        best professional standards. Well organised and with a keen attention to detail that ensures completion of all tasks on
        time and meticulously to specification. Excellent communication and interpersonal skills, able to work well either as
        part of a collaborative team or autonomously when required and thriving in challenging and fast-moving environments by
        prioritising tasks and targets with outstanding time management skills. Now seeking a new challenge in Cloud Computingthat will make the most of this skill set, preferably in a Junior AWS Architect or Junior React Developer role.
        </Typography>

        <Typography variant="h5"  gutterBottom>
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
      
   
      </div>




      
  )
}