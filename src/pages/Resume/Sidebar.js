import React, { useState } from 'react';
import "./Sidebar.css"
import {SidebarData} from "./SidebarData"
import {Link} from "react-scroll"
import * as Ai from "react-icons/ai"
import {Link as Links}  from 'react-router-dom'



    export default function Sidebar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar) 


    return (

    <div > 

        <div >         
        <Links to="#" className="right-arrow" >
               <Ai.AiOutlineDoubleRight onClick={showSidebar} /><Ai.AiOutlineDoubleRight onClick={showSidebar} />
       </Links>
       </div>

         <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
          <ul className='sidebar-menu-items' onClick={showSidebar} >
            <li className='sidebar-toggle'>
              <Links to='#' className="left-arrow">
                <Ai.AiOutlineDoubleLeft />
              </Links>
            </li>
            {SidebarData.map((val, key) => {
              return (
                  
                       <Link 
                            className="links" 
                            onClick={showSidebar}
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
            </ul>
        </nav>
        </div>

)}





