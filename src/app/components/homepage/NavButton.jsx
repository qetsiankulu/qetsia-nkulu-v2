"use client" // Ensure this component is client-side only 
import Link from 'next/link'
import useScreenSize from '../hooks/useScreenSize'

import { motion } from "framer-motion"
import { Home, User, Palette, Mail, FileText } from 'lucide-react'

const getIcon = (icon) => {
    const iconClass = 'w-full h-auto' 
    const iconWidth = 1.5

    switch (icon) { 
        case "about": 
            return <User className = {`${iconClass}`} strokeWidth = {`${iconWidth}`} />
        case "projects": 
            return <Palette className = {`${iconClass} `} strokeWidth = {`${iconWidth}`} />
        case "contact": 
            return <Mail className = {`${iconClass}`} strokeWidth = {`${iconWidth}`} />
        case "resume": 
            return <FileText className = {`${iconClass}`} strokeWidth = {`${iconWidth}`}/>
        default: 
            return <Home className = {`${iconClass}`} strokeWidth = {`${iconWidth}`} />
    }
}

const item = { 
    hidden: {scale: 0}, 
    show: {scale: 1}
}

const NavLink = motion.create(Link); 


const NavButton = ({label, link, icon, newTab}) => {
    const screenSize = useScreenSize(); 
    const isMobile  = screenSize !== undefined && screenSize < 768;

    return (
        <div className='nav-button-container' >
            <NavLink 
            variants = {item}
            href = {link} 
            target= {newTab ? '_blank' : '_self'} 
            className='nav-link group'
            aria-label= {label}
            name = {label}
            >
                <span className={`nav-icon peer ${isMobile ? 'nav-icon-small' : 'nav-icon-large'}`}> 
                    {getIcon(icon)}
                </span>
                <span className='nav-tooltip peer-hover:block' >{label}</span>
            </NavLink>
        </div>

    )
}

export default NavButton
