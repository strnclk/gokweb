'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MaintenancePage() {
  const [stevePosition, setStevePosition] = useState({ x: 50, y: 0 });
  const [velocityY, setVelocityY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [obstacles, setObstacles] = useState<Array<{ position: { x: number; y: number } }>>([]);
  const [score, setScore] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const lastFrameRef = useRef<number | null>(null);
  const obstacleIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const gravity = 0.5;
  const jumpPower = 12;
  const obstacleSpeed = 4;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        jump();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      event.preventDefault();
      jump();
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      if (scrollableHeight > 0) {
        setScrollProgress((scrollPosition / scrollableHeight) * 100);
      } else {
        setScrollProgress(0);
      }
      
      setShowScrollTop(scrollPosition > 300);
    };

    window.addEventListener('keydown', handleKeyDown);
    gameContainerRef.current?.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('scroll', handleScroll);

    startGame();

    return () => {
      stopGame();
      window.removeEventListener('keydown', handleKeyDown);
      gameContainerRef.current?.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gameLoop = (timestamp: number) => {
    if (!lastFrameRef.current) lastFrameRef.current = timestamp;
    const delta = (timestamp - lastFrameRef.current) / 16;

    if (delta >= 1) {
      updateGame(delta);
      lastFrameRef.current = timestamp;
    }

    if (!isGameOver) {
      requestAnimationFrame(gameLoop);
    }
  };

  const updateGame = (delta: number) => {
    if (isJumping || stevePosition.y > 0) {
      setVelocityY(prev => prev - gravity * delta);
      setStevePosition(prev => {
        const newY = prev.y + velocityY * delta;
        if (newY <= 0) {
          setIsJumping(false);
          return { ...prev, y: 0 };
        }
        return { ...prev, y: newY };
      });
    }

    setObstacles(prev => {
      return prev
        .map(obstacle => ({
          ...obstacle,
          position: { ...obstacle.position, x: obstacle.position.x - obstacleSpeed * delta }
        }))
        .filter(obstacle => {
          if (obstacle.position.x <= -20) {
            if (!isGameOver) setScore(s => s + 1);
            return false;
          }
          return true;
        });
    });

    checkCollisions();
  };

  const jump = () => {
    if (!isJumping && !isGameOver && stevePosition.y === 0) {
      setIsJumping(true);
      setVelocityY(jumpPower);
    }
  };

  const generateObstacle = () => {
    setObstacles(prev => [...prev, { position: { x: 800, y: 0 } }]);
  };

  const checkCollisions = () => {
    obstacles.forEach(obstacle => {
      if (
        obstacle.position.x < stevePosition.x + 32 &&
        obstacle.position.x + 20 > stevePosition.x &&
        stevePosition.y < 48
      ) {
        gameOver();
      }
    });
  };

  const gameOver = () => {
    setIsGameOver(true);
    stopGame();
  };

  const restartGame = () => {
    setStevePosition({ x: 50, y: 0 });
    setVelocityY(0);
    setIsJumping(false);
    setIsGameOver(false);
    setObstacles([]);
    setScore(0);
    lastFrameRef.current = null;
    startGame();
  };

  const startGame = () => {
    if (obstacleIntervalRef.current) clearInterval(obstacleIntervalRef.current);
    obstacleIntervalRef.current = setInterval(() => {
      generateObstacle();
    }, 2000);
    if (!isGameOver) {
      requestAnimationFrame(gameLoop);
    }
  };

  const stopGame = () => {
    if (obstacleIntervalRef.current) clearInterval(obstacleIntervalRef.current);
    obstacleIntervalRef.current = null;
    lastFrameRef.current = null;
  };

  return (
    <div className="min-h-screen bg-[#3586c9] flex items-center justify-center px-6 py-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center text-white mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 20 20"
            className="mx-auto mb-6"
          >
            <path
              fill="#fff"
              d="M3.135 6.89c.933-.725 1.707-.225 2.74.971c.116.135.272-.023.361-.1S7.687 6.456 7.754 6.4c.066-.059.146-.169.041-.292a36 36 0 0 1-.743-.951c-1.808-2.365 4.946-3.969 3.909-3.994c-.528-.014-2.646-.039-2.963-.004c-1.283.135-2.894 1.334-3.705 1.893c-1.061.726-1.457 1.152-1.522 1.211c-.3.262-.048.867-.592 1.344c-.575.503-.934.122-1.267.414c-.165.146-.627.492-.759.607c-.133.117-.157.314-.021.471c0 0 1.264 1.396 1.37 1.52c.105.122.391.228.567.071c.177-.156.632-.553.708-.623c.078-.066-.05-.861.358-1.177m5.708.517c-.12-.139-.269-.143-.397-.029L7.012 8.63a.29.29 0 0 0-.027.4l8.294 9.439c.194.223.53.246.751.053l.97-.813a.54.54 0 0 0 .052-.758zM19.902 3.39c-.074-.494-.33-.391-.463-.182c-.133.211-.721 1.102-.963 1.506c-.24.4-.832 1.191-1.934.41c-1.148-.811-.749-1.377-.549-1.758c.201-.383.818-1.457.907-1.59c.089-.135-.015-.527-.371-.363c-.357.164-2.523 1.025-2.823 2.26c-.307 1.256.257 2.379-.85 3.494l-1.343 1.4l1.349 1.566l1.654-1.57c.394-.396 1.236-.781 1.998-.607c1.633.369 2.524-.244 3.061-1.258c.482-.906.402-2.814.327-3.308M2.739 17.053a.54.54 0 0 0 0 .758l.951.93c.208.209.538.121.746-.088l4.907-4.824l-1.503-1.714z"
            />
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yapım Aşamasında</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Yenilikler için biraz beklemeniz gerekiyor. Beklemekten sıkıldıysanız size özel oyunumuzu deneyiniz.
          </p>
        </div>

        <div
          ref={gameContainerRef}
          className="w-[90%] max-w-[800px] h-[300px] mx-auto bg-[#0d2029] rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-2 left-2 text-white text-2xl font-bold z-10">Skor: {score}</div>
          <div
            className="absolute w-8 h-12 bg-[#0f5cff] rounded transition-all"
            style={{
              left: `${stevePosition.x}px`,
              bottom: `${stevePosition.y}px`,
              transition: 'bottom 0.016s linear'
            }}
          />
          {obstacles.map((obstacle, index) => (
            <div
              key={index}
              className="absolute w-5 h-12 bg-red-500 rounded"
              style={{
                left: `${obstacle.position.x}px`,
                bottom: '0px',
                transition: 'left 0.016s linear'
              }}
            />
          ))}
          {isGameOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <button
                onClick={restartGame}
                className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Yeniden Başlat
              </button>
            </div>
          )}
        </div>
      </div>

    
      
      <Footer />
    </div>
  );
}
