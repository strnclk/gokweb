// @ts-nocheck
"use client";

import { useEffect, useRef, useCallback, useMemo, useState } from 'react';

export default function GravityParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);
  const lastFrameTime = useRef<number>(0);

  // Development mode optimizations
  const isDev = process.env.NODE_ENV === 'development';
  const [particleCount, setParticleCount] = useState(0);
  
  useEffect(() => {
    setParticleCount(window.innerWidth < 768 ? (isDev ? 15 : 40) : (isDev ? 25 : 80));
  }, [isDev]);
  
  const CONNECTION_DISTANCE = 250;
  const colors = useMemo(() => [
    'rgba(147, 112, 219, 1.0)',  // Purple
    'rgba(100, 149, 237, 1.0)',  // Cornflower Blue
    'rgba(255, 182, 193, 1.0)',  // Light Pink
    'rgba(144, 238, 144, 1.0)',  // Light Green
    'rgba(255, 218, 185, 1.0)',  // Peach
    'rgba(173, 216, 230, 1.0)',  // Light Blue
  ], []);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particles = particlesRef.current;
    particles.length = 0;
    const baseRadius = 350;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = baseRadius + (Math.random() - 0.5) * 180;
      
      particles.push({
        angle: angle,
        radius: radius,
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        size: Math.random() * 1 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }, [particleCount, colors]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Frame rate limiting for development
    const now = performance.now();
    if (isDev && now - lastFrameTime.current < 100) { // 10 FPS in dev
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    lastFrameTime.current = now;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;
    const mouse = { x: width / 2, y: height / 2 };

    particles.forEach((p, i) => {
      // Calculate target position
      const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
      const targetX = mouse.x + Math.cos(angle) * p.radius;
      const targetY = mouse.y + Math.sin(angle) * p.radius;

      // Much slower movement in development
      const speedMultiplier = isDev ? 0.0003 : 0.001;
      p.vx += (targetX - p.x) * speedMultiplier;
      p.vy += (targetY - p.y) * speedMultiplier;

      // Organic radius fluctuation (much slower)
      p.radius += (Math.random() - 0.5) * 0.05;

      // Simplified repulsion (less calculations in dev)
      const maxChecks = isDev ? 1 : 2;
      for (let j = i + 1; j < Math.min(i + maxChecks, particles.length); j++) {
        const other = particles[j];
        const dx = p.x - other.x;
        const dy = p.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 50) {
          const force = (50 - dist) / 50;
          p.vx += dx * force * 0.003;
          p.vy += dy * force * 0.003;
        }
      }

      // Micro movement (reduced in dev)
      p.vx += (Math.random() - 0.5) * (isDev ? 0.0005 : 0.001);
      p.vy += (Math.random() - 0.5) * (isDev ? 0.0005 : 0.001);

      // Higher friction for stability
      p.vx *= 0.995;
      p.vy *= 0.995;

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Boundary check
      const padding = 20;
      if (p.x < padding) p.x = padding;
      if (p.x > width - padding) p.x = width - padding;
      if (p.y < padding) p.y = padding;
      if (p.y > height - padding) p.y = height - padding;

      // Draw particle (simplified)
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    // Draw connections (much fewer checks in dev)
    const maxConnections = isDev ? 1 : 2;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      for (let j = i + 1; j < Math.min(i + maxConnections, particles.length); j++) {
        const other = particles[j];
        const dx = p.x - other.x;
        const dy = p.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(other.x, other.y);
          const alpha = (1 - dist / CONNECTION_DISTANCE) * (isDev ? 0.02 : 0.05);
          ctx.strokeStyle = `rgba(147, 112, 219, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isDev]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize particles once
    initParticles();

    // Start animation with delay
    const timeoutId = setTimeout(() => {
      animate();
    }, isDev ? 500 : 100); // Longer delay in dev

    // Resize handler (throttled more in dev)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initParticles();
      }, isDev ? 500 : 250); // More throttling in dev
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [initParticles, animate, isDev]);

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
