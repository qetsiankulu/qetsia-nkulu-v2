import React from 'react'
import {Menu, X} from 'lucide-react'

/**
 * ToggleButton Component
 * ----------------------
 * This component renders toggle button for the mobile menu.
 * The hamburger menu icon appears when `isToggled` is `False`.
 * The close (cross) icon appears when `isToggled` is `True`. 
 * Icons are imported from the Luicide library. The icons can be viewed at https://lucide.dev/icons/. 
 * It uses a custom 'mobile-menu-icon` class for styling located in `globals.css`
 * It uses a custom 'mobile-menu-style` class for styling located in `globals.css`
 *
 * Features:
 * - Designed to be shown on mobile screens and not visible on larger (md+) screens.
 * - The icon switches from the hamburger menu icon to a X icon with a rotating animation
 * 
 * Props: 
 * - `isToggled` - State variable that that keeps track as to whether or not the mobile menu has been toggled
 * - `toggleMenu` - Event handler that switches between the two states 
 * - `buttonRef` - Reference to the menu button (`<button>`) that the user clicks to toggle the side panel
 *
 * Implementation Details:
 * - Renders both icons (Menu and X), but uses opacity-0 to hide one at a time while transitioning between them.
 * 
 *
 */

const ToggleButton = ({ isToggled, toggleMenu, buttonRef }) => {
  return (
    <button
        ref={buttonRef}
        className='toggle-button'
        onClick={toggleMenu}
        aria-expanded={isToggled}
        aria-label="Toggle navigation menu"
    > 
        <div 
            className={`mobile-menu-icon ${isToggled ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
            style={{position: 'absolute', width: '100%', height: '100%'}}
        > 
            <Menu className='menu-icon-style' />
        </div>
        <div 
            className={`mobile-menu-icon  ${isToggled ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
            style={{position: 'absolute', width: '100%', height: '100%'}}
        >
             <X className='menu-icon-style' />
        </div>

    </button>
  )
}

export default ToggleButton