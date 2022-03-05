import React from 'react'
import WebIcon from '../assets/svg/Service_svg/WebIcon.svg'
import Mobile from '../assets/svg/Service_svg/Mobile.svg'
import NetIcon from '../assets/svg/Service_svg/NetIcon.svg'
import GDIcon from '../assets/svg/Service_svg/GDIcon.svg'
import SQAIcon from '../assets/svg/Service_svg/SQAIcon.svg'
import Pro_Manage from '../assets/svg/Service_svg/Pro_Manage.svg'
import Marketing from '../assets/svg/Service_svg/Marketing.svg'
//COMPONENTS
import Web_Dev from '../assets/components/service_Components/Web_Dev'

export const Data = [
    {
        id: 1,
        name: "Web Development",
        svg: <WebIcon fill="#33BD94" />,
        svg_S: <WebIcon fill="#FFFFFF" />,
        compo: <Web_Dev />
    },
    {
        id: 2,
        name: "Mobile App Development",
        svg: <Mobile fill="#33BD94" />,
        svg_S: <Mobile fill="#FFFFFF" />,
        compo: <Web_Dev />
    },
    {
        id: 3,
        name: ".Net Development",
        svg: <NetIcon fill="#33BD94" />,
        svg_S: <NetIcon fill="#FFFFFF" />,
        compo: <Web_Dev />
    },
    {
        id: 4,
        name: "Graphic Designing",
        svg: <GDIcon fill="#33BD94" />,
        svg_S: <GDIcon fill="#FFFFFF" />,
        compo: <Web_Dev />
    },
    {
        id: 5,
        name: "SQA Services",
        svg: <SQAIcon fill="#33BD94" />,
        svg_S: <SQAIcon fill="#FFFFFF" />,
        compo: <Web_Dev />
    },
    {
        id: 6,
        name: "Project Management",
        svg: <Pro_Manage fill="#33BD94" />,
        svg_S: <Pro_Manage fill="#FFFFFF" />,
        compo: <Web_Dev />
    },
    {
        id: 7,
        name: "Digital Marketing",
        svg: <Marketing fill="#33BD94" />,
        svg_S: <Marketing fill="#FFFFFF" />,
        compo: <Web_Dev />
    },


];