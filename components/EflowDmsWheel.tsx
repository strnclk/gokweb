'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  FolderTree,
  Search,
  History,
  Users,
  FileCheck,
  Zap,
  BarChart3,
  Archive
} from 'lucide-react';

interface DmsNodeData {
  id: number;
  title: string;
  angle: number; // degrees around center (250, 250)
  icon: React.ElementType;
}

export default function EflowDmsWheel() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // 9 Orbital Node Bubbles matching the uploaded e-flow DMS® diagram
  // Angles spaced by 40° starting from top (-90°)
  const nodes: DmsNodeData[] = [
    {
      id: 0,
      title: 'Güvenli doküman paylaşımı',
      angle: -90, // 12 o'clock (Top)
      icon: ShieldCheck
    },
    {
      id: 1,
      title: 'Doküman depolama ve organizasyon',
      angle: -50, // ~1:20 o'clock
      icon: FolderTree
    },
    {
      id: 2,
      title: 'Belge arama ve erişim kolaylığı',
      angle: -10, // ~2:40 o'clock
      icon: Search
    },
    {
      id: 3,
      title: 'Versiyon kontrolü',
      angle: 30, // ~4 o'clock
      icon: History
    },
    {
      id: 4,
      title: 'Çevrimiçi işbirliği',
      angle: 70, // ~5:20 o'clock
      icon: Users
    },
    {
      id: 5,
      title: 'Uyumluluk ve denetim',
      angle: 110, // ~6:40 o'clock
      icon: FileCheck
    },
    {
      id: 6,
      title: 'Hız ve verimlilik',
      angle: 150, // ~8 o'clock
      icon: Zap
    },
    {
      id: 7,
      title: 'İzleme ve raporlama',
      angle: 190, // ~9:20 o'clock
      icon: BarChart3
    },
    {
      id: 8,
      title: 'İmha ve arşivleme',
      angle: 230, // ~10:40 o'clock
      icon: Archive
    }
  ];

  // Polar to Cartesian utility (Center: 250, 250, Radius: 165)
  const polarToCartesian = (cx: number, cy: number, r: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleInRadians),
      y: cy + r * Math.sin(angleInRadians)
    };
  };

  const centerR = 165; // Radius for the main circular track & node centers
  const bubbleR = 46;  // Radius of each orbital bubble node

  return (
    <div className="relative flex items-center justify-center w-full max-w-[500px] sm:max-w-[520px] mx-auto select-none">
      {/* 1. Ultra-Smooth 60fps GPU-Accelerated Floating Wrapper */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        className="relative flex items-center justify-center w-full aspect-square p-2"
      >
        {/* Ambient Backlight Glow Aura */}
        <div className="absolute w-[82%] h-[82%] rounded-full bg-gradient-to-tr from-[#348E99]/20 via-[#67A3BF]/25 to-[#4E8798]/20 blur-3xl pointer-events-none" />

        {/* Dashed Rotating Outer Halo Rings */}
        <div className="absolute w-[94%] h-[94%] border-2 border-dashed border-[#348E99]/30 rounded-full animate-[spin_55s_linear_infinite] pointer-events-none" />
        <div
          className="absolute w-[88%] h-[88%] border border-dashed border-[#67A3BF]/25 rounded-full animate-[spin_38s_linear_infinite] pointer-events-none"
          style={{ animationDirection: 'reverse' }}
        />

        {/* 2. SVG 9-Node Circular Track Vector Wheel */}
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-2xl relative z-10 overflow-visible"
        >
          <defs>
            <filter id="dmsBubbleGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            {/* Linear gradient for circular node bubbles */}
            <linearGradient id="dmsNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8CB7CA" />
              <stop offset="50%" stopColor="#709FB3" />
              <stop offset="100%" stopColor="#55879B" />
            </linearGradient>
            <linearGradient id="dmsNodeGradHover" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A2C8DC" />
              <stop offset="50%" stopColor="#7CB0C6" />
              <stop offset="100%" stopColor="#5E93A9" />
            </linearGradient>
          </defs>

          {/* Continuous Main Background Track Ring (Orijinal fotodaki kalın dairesel hat) */}
          <circle
            cx="250"
            cy="250"
            r={centerR}
            fill="none"
            stroke="#4E8798"
            strokeWidth="32"
            opacity="0.9"
          />

          {/* Render 9 Orbital Node Bubbles */}
          {nodes.map((node, idx) => {
            const isHovered = hoveredIdx === idx;
            const pos = polarToCartesian(250, 250, centerR, node.angle);

            const IconComponent = node.icon;

            return (
              <g
                key={node.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="cursor-pointer transition-transform duration-300 ease-out"
                style={{
                  transformOrigin: `${pos.x}px ${pos.y}px`,
                  transform: isHovered ? 'scale(1.12)' : 'scale(1)'
                }}
              >
                {/* Orbital Bubble Circle */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={bubbleR}
                  fill={isHovered ? 'url(#dmsNodeGradHover)' : 'url(#dmsNodeGrad)'}
                  filter={isHovered ? 'url(#dmsBubbleGlow)' : undefined}
                  style={{
                    stroke: isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                    strokeWidth: isHovered ? 3.5 : 2,
                    transition: 'all 0.3s ease'
                  }}
                />

                {/* Content Inside Bubble Node (Icon + Title) */}
                <foreignObject
                  x={pos.x - bubbleR}
                  y={pos.y - bubbleR}
                  width={bubbleR * 2}
                  height={bubbleR * 2}
                  className="overflow-visible pointer-events-none"
                >
                  <div className="flex flex-col items-center justify-center text-center text-white w-full h-full p-2">
                    <IconComponent
                      className={`w-5 h-5 mb-0.5 text-white filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-transform duration-300 ${
                        isHovered ? 'scale-115' : 'scale-100'
                      }`}
                    />
                    <span className="text-[10.5px] sm:text-[11px] font-semibold leading-tight tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] max-w-[82px]">
                      {node.title}
                    </span>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>

        {/* 3. Center Badge (Cam Gibi Net, Estetik ve Birebir Orijinal e-flow DMS® Logosu) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="w-[175px] h-[175px] sm:w-[195px] sm:h-[195px] bg-white rounded-full shadow-[0_14px_40px_rgba(0,0,0,0.14)] border-4 border-slate-100 flex items-center justify-center p-3 text-center pointer-events-auto">
            <svg
              className="w-36 sm:w-40 h-auto overflow-visible select-none"
              viewBox="0 0 215 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 'e' Harfinin Üst İç Alanının Teal Mavi Dolgusu */}
              <path d="M 8 25 A 10 10 0 0 1 28 25 Z" fill="#348E99" />

              {/* 'e' Harfinin Açık Uçlu, Kusursuz Tipografik Dış Çizgisi */}
              <path
                d="M 28 34 C 24 41, 8 40, 8 25 C 8 10, 28 10, 28 25 L 8 25"
                stroke="#000000"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* '-flow' Siyah Kalın Tipografisi */}
              <text
                x="33"
                y="35"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontWeight="900"
                fontSize="32"
                fill="#000000"
                letterSpacing="-1"
              >
                -flow
              </text>

              {/* 'DMS' Yumuşak Çelik/Mavi Renkli Tipografisi */}
              <text
                x="120"
                y="35"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontWeight="700"
                fontSize="32"
                fill="#548A99"
                letterSpacing="0"
              >
                DMS
              </text>

              {/* '®' Tescilli Marka Sembolü */}
              <circle cx="199" cy="17" r="5" stroke="#000000" strokeWidth="1.2" fill="none" />
              <text
                x="196.8"
                y="20"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontWeight="700"
                fontSize="8"
                fill="#000000"
              >
                R
              </text>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
