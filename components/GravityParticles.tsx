// @ts-nocheck
"use client";

import { useEffect, useRef } from 'react';

export default function GravityParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas!.getContext('2d');
    if (!ctx) return;

    const particles: {
      angle: number;
      radius: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }[] = [];
    const PARTICLE_COUNT = window.innerWidth < 768 ? 80 : 180;

    let width = 0;
    let height = 0;
    let mouse = { x: 0, y: 0 };
    let mouseOnScreen = true;

    // Physics constants
    const CONNECTION_DISTANCE = 250;

    const colors = [
      'rgba(147, 112, 219, 1.0)',  // Purple
      'rgba(100, 149, 237, 1.0)',  // Cornflower Blue
      'rgba(255, 182, 193, 1.0)',  // Light Pink
      'rgba(144, 238, 144, 1.0)',  // Light Green
      'rgba(255, 218, 185, 1.0)',  // Peach
      'rgba(173, 216, 230, 1.0)',  // Light Blue
    ];

    // Initialize canvas size and particles
    const initParticles = () => {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.scale(dpr, dpr);

      mouse = { x: width / 2, y: height / 2 };

      particles.length = 0;
      const baseRadius = 350;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
        const radius = baseRadius + (Math.random() - 0.5) * 180;
        
        particles.push({
          angle: angle,
          radius: radius,
          x: mouse.x + Math.cos(angle) * radius,
          y: mouse.y + Math.sin(angle) * radius,
          vx: 0,
          vy: 0,
          size: Math.random() * 1 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    // Delay init to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      initParticles();
    }, 50);

    // Resize
    const handleResize = () => {
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    // Mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Mouse leave screen
    const handleMouseLeave = () => {
      mouseOnScreen = false;
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // Mouse enter screen
    const handleMouseEnter = () => {
      mouseOnScreen = true;
    };
    document.addEventListener('mouseenter', handleMouseEnter);

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Calculate target position based on mouse state
        let targetX, targetY;
        
        if (mouseOnScreen) {
          // Mouse is on screen - organize around mouse
          const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
          targetX = mouse.x + Math.cos(angle) * p.radius;
          targetY = mouse.y + Math.sin(angle) * p.radius;
        } else {
          // Mouse is off screen - return to screen center (initial state)
          const centerX = width / 2;
          const centerY = height / 2;
          const angle = Math.atan2(p.y - centerY, p.x - centerX);
          targetX = centerX + Math.cos(angle) * p.radius;
          targetY = centerY + Math.sin(angle) * p.radius;
        }

        // Soft follow to target (slower)
        p.vx += (targetX - p.x) * 0.003;
        p.vy += (targetY - p.y) * 0.003;

        // Organic radius fluctuation (slower)
        p.radius += (Math.random() - 0.5) * 0.3;

        // Repulsion from other particles (prevent clustering)
        particles.forEach((other) => {
          if (other === p) return;
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 50) {
            const force = (50 - dist) / 50;
            p.vx += dx * force * 0.01;
            p.vy += dy * force * 0.01;
          }
        });

        // Micro movement (reduced)
        p.vx += (Math.random() - 0.5) * 0.003;
        p.vy += (Math.random() - 0.5) * 0.003;

        // Friction (higher for slower movement)
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Boundary check - keep particles on screen
        const padding = 20;
        if (p.x < padding) {
          p.x = padding;
          p.vx *= -0.5;
        }
        if (p.x > width - padding) {
          p.x = width - padding;
          p.vx *= -0.5;
        }
        if (p.y < padding) {
          p.y = padding;
          p.vy *= -0.5;
        }
        if (p.y > height - padding) {
          p.y = height - padding;
          p.vy *= -0.5;
        }

        // Draw particle with glow
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.fill();

        // Glow effect
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size + 3, 0, Math.PI * 2);
        ctx!.fillStyle = p.color.replace('1.0', '0.4');
        ctx!.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((other) => {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(other.x, other.y);
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.08;
            ctx!.strokeStyle = `rgba(147, 112, 219, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    // Start animation after init
    const animationTimeout = setTimeout(() => {
      animate();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(animationTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
