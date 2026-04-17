'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypingAnimation({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50,
  pauseDuration = 2000,
  className = '' 
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (charIndex > 0) {
        const deleteTimeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
        return () => clearTimeout(deleteTimeout);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        const typeTimeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(typeTimeout);
      } else {
        setIsPaused(true);
      }
    }
  }, [charIndex, isDeleting, isPaused, textIndex, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayText.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < displayText.split('\n').length - 1 && <br />}
        </span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className="inline-block w-0.5 h-6 bg-gray-900 ml-1"
      />
    </motion.span>
  );
}
