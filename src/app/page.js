"use client"
import React from 'react'
import BackgroundImage from "./components/BackgroundImage"
import useScreenSize from './components/hooks/useScreenSize';
import MobileLayout from './components/homepage/MobileLayout';
import DesktopLayout from './components/homepage/DesktopLayout'

export default function HomePage() {
  const screenSize = useScreenSize(); 

  // Large Screen Breakpoint: 768px 
  const isMobile = screenSize !== undefined && screenSize < 768;

  return (
    <main className="main-content">
      <BackgroundImage src="/background/home-background.jpg" />
      {isMobile ? <MobileLayout/> : <DesktopLayout/>}
    </main>
  );
}
