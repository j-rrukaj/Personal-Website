import React from 'react'

import * as Ai from "react-icons/ai"
import * as Fa from "react-icons/fa"
import * as Cg from "react-icons/cg"
import * as Im from "react-icons/im"

import "./SidebarData.css"

export const SidebarData = [
    {
        title: "Summary" ,
        icon: <Im.ImProfile className="sidebar-icons"/>,
    },
    {
        title: "Skill Set",
        icon: <Ai.AiOutlineStar className="sidebar-icons"/>,
    },
    {
        title: "AWS",
        icon: <Ai.AiOutlineCloud className="sidebar-icons"/>
    },
    {
        title: "Certifications",
        icon: <Ai.AiOutlineSafetyCertificate className="sidebar-icons"/>,
    },
    {
        title: "Projects",
        icon: <Fa.FaProjectDiagram className="sidebar-icons"/>,
    },
    {
        title: "Career",
        icon: <Cg.CgWorkAlt className="sidebar-icons"/>,
    },
    {
        title: "Education",
        icon: <Fa.FaGraduationCap className="sidebar-icons"/>,
    },
    {
        title: "CV",
        icon: <Ai.AiOutlineDownload className="sidebar-icons"/>,
    },



]
 