import { NAV_ITEMS } from '../../data'
import { Link } from "react-scroll"
import React from 'react'

/**
 * MobileMenu Component
 * ----------------------
 * This component renders the navigation menu for mobile screens.
 * It uses a custom 'side-panel` class for styling located in `globals.css`
 * It uses a custom 'mobile-menu' class for styling located in `globals.css`
 * It uses a custom 'mobile-menu-text' class for styling located in `globals.css`
 * 
 * Features:
 * - Dynamically maps over the `NAV_ITEMS` array to create navigation links.
 * - Each link is styled with Tailwind CSS.
 * - Designed to be shown on mobile screens and not visible on larger (md+) screens.
 *
 * Props: 
 * - `isToggled` - State variable that that keeps track as to whether or not the mobile menu has been toggled
 * - `toggleMenu` - Event handler that switches between the two states 
 * - `asideRef` - Reference to the side panel (`<aside>`) that comes out when the user clicks on the Mobile Toggle Button
 *
 * Implementation Details:
 * -`${isToggled ? 'translate-x-0' : 'translate-x-full'}`
 *   - Use conditional rendering to display the side panel depending on the `isToggled` state 
 *  
 * - `NAV_ITEMS.map()`:
 *   - Arrow function `(navItem) => (...)` is used to iterate over the array.
 *   - For each `navItem`, the arrow function generates a `<Link>` component with unique attributes.
 * 
 * - Each link:
 *   - Uses `to={navItem.toLowerCase()}` to reference the corresponding section (e.g., "about", "projects").
 *   - Smooth scrolling (`smooth={true}`) and scroll duration (`duration={500}`) are applied.
 *   - A `key` is assigned to each `<Link>` for React's reconciliation process.
 *   - Clicking one of the `<Link>` components should hide the menu 
 * 
 *
 */

const MobileMenu = ({ isToggled, toggleMenu, asideRef}) => { 
    return ( 
        <aside
            ref={asideRef}
            className={`side-panel ${isToggled ? 'translate-x-0' : 'translate-x-full'}`}   // the side-panel gets hidden when isToggled is `True` 
        >
            <nav className='mobile-menu'> 
                <ul className="flex flex-col space-y-10">
                    {NAV_ITEMS.map((navItem) => (
                        <Link
                            key={navItem}
                            to={navItem.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className='mobile-menu-text'
                            onClick={toggleMenu}
                        >
                            {navItem}
                        </Link>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default MobileMenu

