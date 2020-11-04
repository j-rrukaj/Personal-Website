import React, { useState } from 'react';
import "./Sidebar.css"
import {SidebarData} from "./SidebarData"
import {Link} from "react-scroll"
import * as Bs from "react-icons/bs";

import {Link as Links}  from 'react-router-dom'



    export default function Sidebar() {

    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar) 


    return (

    <div > 

        <div >         
        <Links to="#" className="right-arrow" >
               <Bs.BsArrowBarRight onClick={showSidebar} />
       </Links>
       </div>

         <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
          <ul className='sidebar-menu-items' onClick={showSidebar} >
            <li className='sidebar-toggle'>
              <Links to='#' className="left-arrow">
                <Bs.BsArrowBarLeft />
              </Links>
            </li>
            {SidebarData.map((val, key) => {
              return (
                  <li>
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
                    </li>
              )
            })}
            </ul>
        </nav>
        </div>

)}







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