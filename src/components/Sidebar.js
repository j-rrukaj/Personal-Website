import React from 'react';
import "../App.css";
import {SidebarData} from "./SidebarData"
import {Link} from "react-scroll"
// import Resume from "./components/pages/Resume/Resume"


function Sidebar() {
    return (
        <div>
            <div className="Sidebar">

            <ul>
                {SidebarData.map((val, key) => {
                return (


                    <li> <Link className="links" key={key}
                        activeClass="active"
                        to= "summary"
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
            </div>
        </div>
    )
}

export default Sidebar
