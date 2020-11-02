import React from 'react';
import "../App.css";

import {SidebarData} from "./SidebarData"


function Sidebar() {
    return (
        <div>
            <div className="Sidebar">

            <ul>
                {SidebarData.map((val, key) => {
                return (


                    <li className="links" key={key}>
                        <div id="icon" >
                            {val.icon}
                        </div>
                        <div id="title">
                            {val.title}
                        </div>
                    </li>


                )
                
                })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
