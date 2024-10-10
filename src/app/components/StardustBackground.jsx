"use client"
import React, { useEffect, useRef } from 'react';

const StardustBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const numberOfParticles = 400;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Resize canvas when window resizes
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle constructor
    function Particle(x, y, size, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
      this.opacity = Math.random() * 0.7 + 0.7;

      // Draw each particle
      this.draw = function() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; // White color with opacity
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      };

      // Update particle's position and make it move
      this.update = function() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap particles to other side of the screen when they go off the edge
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      };
    }

    // Create particles array
    function createParticles() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() * 1) - 0.5;
        const speedY = (Math.random() * 1) - 0.5;
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    }

    // Animate particles
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animateParticles);
    }

    // Initialize particles and animation
    createParticles();
    animateParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full -z-10'></canvas>;
};

export default StardustBackground;

