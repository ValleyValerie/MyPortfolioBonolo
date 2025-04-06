'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textStrokeRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const MIN_DISPLAY_TIME = 3000; // Minimum display (3 seconds)
    let loadCompleted = false;
    let animationTimeout: NodeJS.Timeout;

    // Setup continuous animations
    const textAnimation = gsap.to(textStrokeRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power4.out",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5
    });

    const gradientAnimation = gsap.to(".gradient-stop", {
      duration: 4,
      attr: { offset: "+=0.2" },
      repeat: -1,
      yoyo: true,
      ease: "none"
    });

    // Handle page load completion
    const handleLoad = () => {
      if (!loadCompleted) {
        loadCompleted = true;

        animationTimeout = setTimeout(() => {
          gsap.to(preloaderRef.current, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
              if (preloaderRef.current) {
                preloaderRef.current.style.display = "none";
                textAnimation.kill();
                gradientAnimation.kill();
              }
            }
          });
        }, MIN_DISPLAY_TIME);
      }
    };

    // Check current load state
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') handleLoad();
      });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('readystatechange', handleLoad);
      clearTimeout(animationTimeout);
      textAnimation.kill();
      gradientAnimation.kill();
    };
  }, []);

  return (
    <div 
      ref={preloaderRef}
      className="fixed top-0 left-0 z-[9999] w-screen h-screen bg-background flex justify-center items-center overflow-hidden"
    >
      <div className="w-full max-w-[800px] h-[150px] relative">
        <svg 
          viewBox="0 0 800 200" 
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop 
                className="gradient-stop" 
                offset="0%" 
                style={{ stopColor: '#eab308' }} 
              />
              <stop 
                className="gradient-stop" 
                offset="25%" 
                style={{ stopColor: '#ef4444', animationDelay: '-1s' }} 
              />
              <stop 
                className="gradient-stop" 
                offset="50%" 
                style={{ stopColor: '#3b82f6', animationDelay: '-2s' }} 
              />
              <stop 
                className="gradient-stop" 
                offset="75%" 
                style={{ stopColor: '#06b6d4', animationDelay: '-3s' }} 
              />
              <stop 
                className="gradient-stop" 
                offset="100%" 
                style={{ stopColor: '#8b5cf6', animationDelay: '-4s' }} 
              />
            </linearGradient>
            
            <mask id="revealMask">
              <rect x="0" y="0" width="0" height="100%" fill="white">
                <animate 
                  attributeName="width" 
                  from="0" 
                  to="100%" 
                  dur="2s" 
                  repeatCount="indefinite"
                />
              </rect>
            </mask>
          </defs>

          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="middle"
            className="font-[Arial] font-bold text-[10rem] fill-none stroke-[rgba(255,255,255,0.1)] stroke-[1px]"
          >
            BONOLO
          </text>

          <text 
            ref={textStrokeRef}
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="middle"
            className="font-[Arial] font-bold text-[10rem] fill-none stroke-[url(#textGradient)] stroke-[1px] mask-[url(#revealMask)]"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000
            }}
          >
            BONOLO
          </text>
        </svg>
      </div>
    </div>
  );
};