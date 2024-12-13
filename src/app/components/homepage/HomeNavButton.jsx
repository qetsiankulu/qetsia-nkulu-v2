"use client" // Ensure this component is client-side only 

import { Home, User, Palette, Mail, FileText } from 'lucide-react'
import Link from 'next/link'
import { motion } from "framer-motion"


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

const NavLink = motion(Link)


const HomeNavButton = ({label, link, icon, newTab}) => {
    return (
        <div className='cursor-pointer px-[50px] md:px-[40px] xs:px-[30px] xxs:px-[10px]' >
            <NavLink 
            variants = {item}
            href = {link} 
            target= {newTab ? '_blank' : '_self'} 
            className='text-foreground group rounded-full flex items-center justify-center 
            custom-bg'
            aria-label= {label}
            name = {label}
            >
                <span className='
                        relative peer p-4
                        lg:w-20 lg:h-20 
                        md:w-20 md:h-20
                        xs:w-16 xs:h-16
                        xxs:w-14 xxs:h-14
                    ' 
                > 
                    {getIcon(icon)}
                </span>
                <span className='absolute hidden peer-hover:block text-sm 
                px-1 py-1 bottom-full mx-2 to-1/2 -translate-y-1/2 bg-background 
                rounded-md shadow-lg whitespace-nowrap'>
                    {label}
                </span>
            </NavLink>
        </div>

    )
}

export default HomeNavButton