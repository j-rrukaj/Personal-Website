import React from 'react'
import "./SidebarData.css"
import * as Ai from "react-icons/ai"
import * as Fa from "react-icons/fa"
import * as Cg from "react-icons/cg"
import * as Im from "react-icons/im"



export const SidebarData = [
    {
        id: 1,
        title: "Summary" ,
        icon: <Im.ImProfile className="sidebar-icons"/>,
    },
    {
        id: 2,
        title: "Skill Set",
        icon: <Ai.AiOutlineStar className="sidebar-icons"/>,
    },
    {
        id: 3,
        title: "AWS",
        icon: <Ai.AiOutlineCloud className="sidebar-icons"/>
    },
    {
        id: 4,
        title: "Certifications",
        icon: <Ai.AiOutlineSafetyCertificate className="sidebar-icons"/>,
    },
    {
        id: 5,
        title: "Projects",
        icon: <Fa.FaProjectDiagram className="sidebar-icons"/>,
    },
    {
        id: 6,
        title: "Career",
        icon: <Cg.CgWorkAlt className="sidebar-icons"/>,
    },
    {
        id: 7,
        title: "Education",
        icon: <Fa.FaGraduationCap className="sidebar-icons"/>,
    },
    {
        id: 8,
        title: "CV",
        icon: <Ai.AiOutlineDownload className="sidebar-icons"/>,
    },



]
 