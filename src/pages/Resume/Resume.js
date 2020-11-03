import React, { Component } from "react";
import Sidebar from "./Sidebar"


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
    
     
      
        <h1 >
          Resume
        </h1>

      

        <div style={{paddingLeft: "200px", paddingRight: "20px"}} id="summary">

     <Typography  variant="h4" align="center" component="h2" gutterBottom>
          Professional Summary
        </Typography>

        <Typography variant="body1">
        Seeking a dynamic new role as a junior AWS engineer or a junior React programmer, passionate and goal driven individual
        with a proven track record of delivering high quality technical output, analysis and client engagement services to the
        best professional standards. Well organised and with a keen attention to detail that ensures completion of all tasks on
        time and meticulously to specification. Excellent communication and interpersonal skills, able to work well either as
        part of a collaborative team or autonomously when required and thriving in challenging and fast-moving environments by
        prioritising tasks and targets with outstanding time management skills. Now seeking a new challenge in Cloud Computingthat will make the most of this skill set, preferably in a Junior AWS Architect or Junior React Developer role.
        </Typography>


      </div>
      
   
      </div>




      
  )
}