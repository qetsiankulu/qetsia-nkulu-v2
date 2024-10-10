import { Home, User, Palette, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const getIcon = (icon) => {
    switch (icon) { 
        case "home": 
            return <Home className = 'w-full h-auto' strokeWidth = {1.5} />
        case "about": 
            return <User className = 'w-full h-auto' strokeWidth = {1.5} />
        case "projects": 
            return <Palette className = 'w-full h-auto' strokeWidth = {1.5} />
        case "contact": 
            return <Mail className = 'w-full h-auto' strokeWidth = {1.5} />
        default: 
            return <Home className = 'w-full h-auto' strokeWidth = {1.5} />
    }
}

const NavButton = ({label, link, icon, newTab}) => {
  return (
    <div className='cursor-pointer'

    >
        <Link href = {link} target= {newTab ? '_blank' : '_self'} className='text-black rounded-full flex items-center justify-center' aria-label={label}>
            <span className='relative w-20 h-20 p-4'> 
                {getIcon(icon)}
            </span>
        </Link>

    
    </div>
  )
}

export default NavButton