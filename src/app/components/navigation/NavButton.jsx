import { ReactThreeFiber } from '@react-three/fiber'
import { Home, User, Palette, Mail, FileText, NotebookText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const getIcon = (icon) => {
    const iconClass = 'w-full h-auto' 

    switch (icon) { 
        case "about": 
            return <User className = {`${iconClass}`} strokeWidth = {1.5} />
        case "projects": 
            return <Palette className = {`${iconClass} `}strokeWidth = {1.5} />
        case "contact": 
            return <Mail className = {`${iconClass}`} strokeWidth = {1.5} />
        case "resume": 
            return <FileText className = {`${iconClass}`} strokeWidth = {1.5} />
        default: 
            return <Home className = {`${iconClass}`} strokeWidth = {1.5} />
    }
}

const NavButton = ({label, link, icon, newTab}) => {
  return (
    <div className='cursor-pointer px-[50px]'>
        <Link 
        href = {link} 
        target= {newTab ? '_blank' : '_self'} 
        className='text-foreground group rounded-full flex items-center justify-center 
        bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] 
        shadow-glass-inset hover:shadow-glass-sm'
        aria-label={label}
        name = {label}
        >
            <span className='relative peer w-20 h-20 p-4'> {/* use group-hover to change color of icons on hover*/}
                {getIcon(icon)}
            </span>
            <span className='absolute hidden peer-hover:block text-sm 
            px-1 py-1 bottom-full mx-2 to-1/2 -translate-y-1/2 bg-background 
            rounded-md shadow-lg whitespace-nowrap'>
                {label}
            </span>
        </Link>

    
    </div>
  )
}

export default NavButton