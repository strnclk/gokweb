'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cloud,
  Code2,
  TrendingUp,
  BarChart3,
  Settings,
  RefreshCw,
  Coins,
  Brain
} from 'lucide-react';

interface SegmentData {
  id: number;
  title: string;
  color: string;
  glowColor: string;
  icon: React.ElementType;
  startAngle: number;
  endAngle: number;
  midAngle: number;
}

export default function EflowBpmWheel() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Exact 8 Radial Segments matching the uploaded e-flow BPM® circular diagram
  const segments: SegmentData[] = [
    {
      id: 0,
      title: 'Bulut tabanlı çözümler',
      color: '#EE523A', // Coral Red
      glowColor: 'rgba(238, 82, 58, 0.45)',
      icon: Cloud,
      startAngle: -67.5,
      endAngle: -22.5,
      midAngle: -45
    },
    {
      id: 1,
      title: 'No-code platform',
      color: '#67A3BF', // Soft Muted Blue
      glowColor: 'rgba(103, 163, 191, 0.45)',
      icon: Code2,
      startAngle: -22.5,
      endAngle: 22.5,
      midAngle: 0
    },
    {
      id: 2,
      title: 'Verimlilik artışı',
      color: '#348E99', // Deep Teal
      glowColor: 'rgba(52, 142, 153, 0.45)',
      icon: TrendingUp,
      startAngle: 22.5,
      endAngle: 67.5,
      midAngle: 45
    },
    {
      id: 3,
      title: 'Düşük maliyetler',
      color: '#67A3BF', // Soft Muted Blue
      glowColor: 'rgba(103, 163, 191, 0.45)',
      icon: BarChart3,
      startAngle: 67.5,
      endAngle: 112.5,
      midAngle: 90
    },
    {
      id: 4,
      title: 'Azalan hata oranı',
      color: '#EE523A', // Coral Red
      glowColor: 'rgba(238, 82, 58, 0.45)',
      icon: Settings,
      startAngle: 112.5,
      endAngle: 157.5,
      midAngle: 135
    },
    {
      id: 5,
      title: 'Hızlanan iş süreçleri',
      color: '#348E99', // Deep Teal
      glowColor: 'rgba(52, 142, 153, 0.45)',
      icon: RefreshCw,
      startAngle: 157.5,
      endAngle: 202.5,
      midAngle: 180
    },
    {
      id: 6,
      title: 'Gelir artışı',
      color: '#67A3BF', // Soft Muted Blue
      glowColor: 'rgba(103, 163, 191, 0.45)',
      icon: Coins,
      startAngle: 202.5,
      endAngle: 247.5,
      midAngle: 225
    },
    {
      id: 7,
      title: 'Yapay zeka entegrasyonu',
      color: '#348E99', // Deep Teal
      glowColor: 'rgba(52, 142, 153, 0.45)',
      icon: Brain,
      startAngle: 247.5,
      endAngle: 292.5,
      midAngle: 270
    }
  ];

  // Utility to convert polar angle & radius to Cartesian SVG coordinates
  const polarToCartesian = (cx: number, cy: number, r: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleInRadians),
      y: cy + r * Math.sin(angleInRadians)
    };
  };

  // Generate SVG Path string for annular ring slice with arc gap
  const createAnnularSectorPath = (
    cx: number,
    cy: number,
    rInner: number,
    rOuter: number,
    startAngle: number,
    endAngle: number,
    gapDegrees = 4.5
  ) => {
    const adjustedStart = startAngle + gapDegrees / 2;
    const adjustedEnd = endAngle - gapDegrees / 2;

    const pOuterStart = polarToCartesian(cx, cy, rOuter, adjustedStart);
    const pOuterEnd = polarToCartesian(cx, cy, rOuter, adjustedEnd);
    const pInnerEnd = polarToCartesian(cx, cy, rInner, adjustedEnd);
    const pInnerStart = polarToCartesian(cx, cy, rInner, adjustedStart);

    const largeArcFlag = adjustedEnd - adjustedStart <= 180 ? '0' : '1';

    return [
      `M ${pOuterStart.x} ${pOuterStart.y}`,
      `A ${rOuter} ${rOuter} 0 ${largeArcFlag} 1 ${pOuterEnd.x} ${pOuterEnd.y}`,
      `L ${pInnerEnd.x} ${pInnerEnd.y}`,
      `A ${rInner} ${rInner} 0 ${largeArcFlag} 0 ${pInnerStart.x} ${pInnerStart.y}`,
      'Z'
    ].join(' ');
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-[540px] mx-auto select-none">
      {/* 1. Ultra-Smooth 60fps GPU-Accelerated Floating Wrapper */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        className="relative flex items-center justify-center w-full aspect-square p-2"
      >
        {/* Ambient Backlight Glow Aura */}
        <div className="absolute w-[82%] h-[82%] rounded-full bg-gradient-to-tr from-[#EE523A]/18 via-[#348E99]/22 to-[#67A3BF]/18 blur-3xl pointer-events-none" />

        {/* Dashed Rotating Outer Halo Rings */}
        <div className="absolute w-[94%] h-[94%] border-2 border-dashed border-[#348E99]/30 rounded-full animate-[spin_55s_linear_infinite] pointer-events-none" />
        <div
          className="absolute w-[88%] h-[88%] border border-dashed border-[#67A3BF]/25 rounded-full animate-[spin_38s_linear_infinite] pointer-events-none"
          style={{ animationDirection: 'reverse' }}
        />

        {/* 2. SVG Radial 8-Segment Interactive Vector Wheel */}
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-2xl relative z-10 overflow-visible"
        >
          <defs>
            <filter id="segmentGlow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render 8 Radial Ring Segments */}
          {segments.map((seg, idx) => {
            const isHovered = hoveredIdx === idx;

            // Calculate translation offset when hovered (translates outward along midAngle)
            const translationDist = isHovered ? 14 : 0;
            const rad = (seg.midAngle * Math.PI) / 180;
            const translateX = translationDist * Math.cos(rad);
            const translateY = translationDist * Math.sin(rad);

            // Icon & Text label position (middle of inner & outer radius)
            const iconPos = polarToCartesian(250, 250, 154, seg.midAngle);

            const IconComponent = seg.icon;

            return (
              <g
                key={seg.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="cursor-pointer transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${translateX}px, ${translateY}px)`,
                  opacity: 1
                }}
              >
                {/* Segment SVG Path */}
                <path
                  d={createAnnularSectorPath(250, 250, 96, 212, seg.startAngle, seg.endAngle, 4.5)}
                  fill={seg.color}
                  filter={isHovered ? 'url(#segmentGlow)' : undefined}
                  className="transition-all duration-300"
                  style={{
                    stroke: isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                    strokeWidth: isHovered ? 3.5 : 1.5
                  }}
                />

                {/* Segment Content (Zarif, Okunaklı ve Orta Kalınlıkta Etiket Alanı) */}
                <g
                  transform={`translate(${iconPos.x}, ${iconPos.y})`}
                  className="pointer-events-none"
                >
                  <foreignObject
                    x="-55"
                    y="-32"
                    width="110"
                    height="64"
                    className="overflow-visible"
                  >
                    <div className="flex flex-col items-center justify-center text-center text-white w-full h-full px-1">
                      <IconComponent
                        className={`w-6.5 h-6.5 mb-1 text-white filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] transition-transform duration-300 ${
                          isHovered ? 'scale-115' : 'scale-100'
                        }`}
                      />
                      <span className="text-[11.5px] sm:text-[12.5px] font-semibold leading-snug tracking-normal text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] max-w-[105px]">
                        {seg.title}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
            );
          })}
        </svg>

        {/* 3. Center Badge (Cam Gibi Net, Estetik ve Tam Açık e-flow BPM® Logosu) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="w-[175px] h-[175px] sm:w-[195px] sm:h-[195px] bg-white rounded-full shadow-[0_14px_40px_rgba(0,0,0,0.16)] border-4 border-slate-100 flex items-center justify-center p-3 text-center pointer-events-auto">
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

              {/* 'BPM' Teal Renkli Kalın Tipografisi */}
              <text
                x="120"
                y="35"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontWeight="700"
                fontSize="32"
                fill="#348E99"
                letterSpacing="0"
              >
                BPM
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
