import { NAV_ITEMS } from '../../data'
import { Link } from "react-scroll"
import React from 'react'

/**
 * DesktopMenu Component
 * ----------------------
 * This component renders the navigation menu for desktop screens.
 * It uses a custom 'desktop-menu' class for styling located in `globals.css`
 * It utilizes the `NAV_ITEMS` array to dynamically generate navigation links.
 *
 * Features:
 * - Dynamically maps over the `NAV_ITEMS` array to create navigation links.
 * - Each link is styled with Tailwind CSS
 * - Designed to be hidden on mobile screens and visible on larger (md+) screens.
 *
 * Props: None
 *
 * Implementation Details:
 * - `NAV_ITEMS.map()`:
 *   - Arrow function `(navItem) => (...)` is used to iterate over the array.
 *   - For each `navItem`, the arrow function generates a `<Link>` component with unique attributes.
 * 
 * - Each link:
 *   - Uses `to={navItem.toLowerCase()}` to reference the corresponding section (e.g., "about", "projects").
 *   - Smooth scrolling (`smooth={true}`) and scroll duration (`duration={500}`) are applied.
 *   - A `key` is assigned to each `<Link>` for React's reconciliation process.
 *
 * 
 */

const DesktopMenu = () => {
  return (
    <div className= 'desktop-menu'>
            {NAV_ITEMS.map((navItem) => (
                <Link
                key={navItem}
                to={navItem.toLowerCase()}
                smooth={true}
                duration={500}
                className='desktop-menu-text'
                >
                    {navItem}
                </Link>
            ))}
    </div>
  )
}

export default DesktopMenu