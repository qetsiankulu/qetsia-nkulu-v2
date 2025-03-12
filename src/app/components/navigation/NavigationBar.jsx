"use client"
import React, { useState, useRef, useEffect } from "react"

import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import ToggleButton from './ToggleButton'
import MobileMenu from './MobileMenu'


const NavigationBar = () => {
  const [isToggled, setIsToggled] = useState(false);          // State variable to check if Mobile Menu has been toggled

  const asideRef = useRef(null);                              // Ref for the `aside` menu
  const buttonRef = useRef(null);                             // Ref for the `button`

  useEffect(() => {
    // Function to check if the click is outside MobileMenu 
    const handleClickOutside = (event) => {
      if (
        asideRef.current && 
        !asideRef.current.contains(event.target) && // Click is outside the `aside`
        buttonRef.current && 
        !buttonRef.current.contains(event.target) // Click is outside the `button`
      ) {
        setIsToggled(false); // Close the menu
      }
    }

     // Add event listener for clicks
     document.addEventListener("mousedown", handleClickOutside);

     return () => {
       // Clean up the event listener
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, [])

   // Event handler for menu toggling 
   // when you pass a function (like `(prev => !prev)`) to `setIsToggled`, 
   // React automatically calls that function with the previous state value (`prev`) as its argument
   const toggleMenu = () => setIsToggled((prev => !prev)) 

  return (
    <header className={`flex justify-between mx-[50px] w-full shadow-xl ${isToggled ? "" :"backdrop-blur-lg bg-black/10 bg-opacity-20"}`}>
      <nav className="flex items-center justify-between sticky top-0 w-full text-foreground z-50  ">
        <div className="w-full px-6 py-4 flex items-center justify-between">
  
          <Logo />
          <DesktopMenu /> 

          <ToggleButton 
            isToggled={isToggled}
            toggleMenu={toggleMenu}
            buttonRef={buttonRef}
          />

          <MobileMenu 
            isToggled={isToggled}
            toggleMenu={toggleMenu}
            asideRef={asideRef}
          />

      </div>
    </nav>
  </header>
  )
}

export default NavigationBar










     {/* Mobile Menu */}
        {/* <aside 
          ref={asideRef} 
          className={`flex h-screen w-1/2 absolute right-0 top-0 backdrop-blur-lg bg-black/10 visible md:hidden font-robotoMono transform transition-transform duration-200 ease-in-out 
          items-center justify-center
          ${isToggled ? "translate-x-0" : "translate-x-full" 
            }`}>
                <nav className="flex justify-center items-center text-center w-full mb-[100px]">
                  <ul className="flex flex-col space-y-10">
                    {["About", "Projects", "Contact", "Resume"].map((navItem) => (
                      <Link
                        key={navItem}
                        to={navItem.toLowerCase()}
                        smooth={true}
                        duration={500}
                        className="hover:text-white cursor-pointer mt-[20px] text-2xl xs:text-xl xxs:text-lg"
                        onClick={() => setIsToggled(false)}
                      >
                        {navItem}
                      </Link>
                    ))}
                  </ul>
            </nav>
        </aside> */}

{/* Mobile Menu Toggle Button */}
          {/* <button
            ref={buttonRef} 
            className="block md:hidden focus:outline-none z-30 relative w-10 h-10"
            onClick={() => setIsToggled(!isToggled)}
            aria-expanded={isToggled}
            aria-label="Toggle navigation menu"
          > */}
            {/* Menu Icon */}
            {/* <div
              className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                isToggled ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
              style={{ positon: "absolute", width: "100%", height: "100%"}}
            > 
              <Menu className="text-foreground w-10 h-10" /> 
            </div> */}

            {/* X Icon */}
            {/* <div 
              className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                isToggled ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
              style={{ position: "absolute", width: "100%", height: "100%"}}
            > 
              <X className="text-foreground w-10 h-10" />
            </div> */}
          {/* </button> */}


   {/* DesktopMenu */}
          {/* <div className="hidden md:flex space-x-6 font-robotoMono text-xl">
            {["About", "Projects", "Contact", "Resume"].map((navItem) => (
              <Link
                key={navItem}`
                to={navItem.toLowerCase()}
                smooth={true}
                duration={500}
                className="hover:text-white cursor-pointer"
              >
                {navItem}
              </Link>
            ))}
          </div> */}