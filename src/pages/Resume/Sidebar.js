import React from 'react';
import "./Sidebar.css"
import {SidebarData} from "./SidebarData"
import {Link} from "react-scroll"


export default function Sidebar() {
    return (
        
            
            <div className="Sidebar">

           
                {SidebarData.map((val, key) => {
                return (

                       <Link className="links" 
                            activeClass="active"
                            to={val.title}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                             >
                         
                        <div id="icon" >
                            {val.icon}
                        </div>

                        <div id="title">
                            {val.title}
                        </div>
                        
                        </Link>
                       

                )
                
                })}
               
            </div>
        


    )
}













// <div className="Sidebar">

// <Link className="links" 
// activeClass="active"
// to="summary"
// spy={true}
// smooth={true}
// offset={-70}
// duration={500}
//  >
//  Summary
// </Link>


//  <Link className="links" 
// activeClass="active"
// to="skills"
// spy={true}
// smooth={true}
// offset={-70}
// duration={500}
//  >
//  Skills
// </Link>

//  <Link className="links" 
// activeClass="active"
// to="aws"
// spy={true}
// smooth={true}
// offset={-70}
// duration={500}
//  >
//  AWS
// </Link>

//  <Link className="links" 
// activeClass="active"
// to="Certifications"
// spy={true}
// smooth={true}
// offset={-70}
// duration={500}
//  >
//  Certifications
// </Link>

//  <Link className="links" 
// activeClass="active"
// to="Projects"
// spy={true}
// smooth={true}
// offset={-70}
// duration={500}
//  >
//  Projects
// </Link>

//  <Link className="links" 
// activeClass="active"
// to="Career"
// spy={true}
// smooth={true}
// offset={-70}
// duration={500}
//  >
//  Career
// </Link>

//  <Link className="links" 
// activeClass="active"
// to="Education"
// spy={true}
// smooth={true}
// offset={-70}
// duration={500}
//  >
//  Education
// </Link>

// </div>