import React, { useEffect, useState } from 'react';
import "./Home.css"
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse } from '@material-ui/core';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  
  icon: {
    color: 'white',
    fontSize: '2rem',
  },
  colorText: {
    color: 'white',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    alignContent: "center",
    justifyContent: "center",
    color: 'white',
    fontSize: '4.5rem',
    fontFamily: '',
  },
  heading: {
    fontSize: "1.5rem",
    color: "white",
  },
  goDown: {
    color: 'yellow',
    fontSize: '3rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (

    <div>

    <div id="backgroundImg">
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1500 } : {})}
      collapsedHeight={60}
    >
      <div className={classes.container}>
        <h1 className={classes.title}>
        
         John Rrukaj
        </h1>
        
        <h3 className={classes.heading}>
          AWS Solutions Architect & SysOps Administrator 
          <br />
          React Programmer 
        </h3>
       
        <Scroll to="section2" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
      </div>

              
   <div id="section2" >


        <h1 className="heading">A little  about me...</h1>

        <div>

        <p className="info">
               
        Hi, my name is John, I am 26 years old and I live in London, UK. I have started learning a range of different technologies from Infrastructure (AWS) to programming (React.js) this has given me an insight in to business processes.

        <br/>
        <br/>

        I currently hold two AWS Certs and I plan on doing my developer certification next followed by the two professional exams. 
        <br/>
        <br/>

        I am a motivated learner and this has kept me being productive and motivated. 
        <br/>
        <br/>
        Some technology I am using right now are Docker, Kubernetes, CodePipeline, Jenkins and Terraform. 
        <br/>
        <br/>
        In my free time, I attending meet up groups, organising social events and participating in Sunday league football with friends.
        
        <br/>
        <br/>

        

      
       
        </p>

        <p className="info">
        To find out more visit the Resume section which will give you a deep dive in to my professional achievements.
        </p>

        </div>

        </div>




    </div>
    

  )
        }


