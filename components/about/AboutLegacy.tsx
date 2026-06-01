'use client';

import React from 'react';
import { timelineData } from '@/data/aboutTimeline';
import DecryptedText from '@/components/ui/DecryptedText';

export default function AboutLegacy() {
  return (
    <section className="relative w-full py-24 bg-[#070707] overflow-hidden flex flex-col items-center justify-center font-mono">
      
      {/* ── SECTION TITLE ── */}
      <div className="flex flex-col items-center text-center mb-20 px-6">
        <p className="text-[10px] sm:text-xs font-mono tracking-[0.4em] text-indigo-400 uppercase mb-3">
          CHRONOLOGY // LOG_DATABASE_SECTOR
        </p>
        <h2 className="font-mechsuit text-2xl sm:text-3xl text-white tracking-[0.2em] drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
          <DecryptedText
            text="LEGACY & IMPACT"
            animateOn="view"
            speed={60}
            sequential
          />
        </h2>
        <div className="w-16 h-[1px] bg-white/20 mt-4" />
      </div>

      {/* ── TIMELINE CONTAINER ── */}
      <div className="relative w-full max-w-4xl px-6 flex flex-col">
        
        {/* Central timeline neon line */}
        <div 
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7B61FF] via-[#64ffda] to-[#7B61FF] -translate-x-1/2 opacity-25 shadow-[0_0_10px_#7B61FF]" 
          aria-hidden="true"
        />

        <div className="flex flex-col gap-16 md:gap-20">
          {timelineData.map((node, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div 
                key={node.year}
                className="relative flex flex-col md:flex-row items-start justify-between w-full md:even:flex-row-reverse"
              >
                {/* Timeline node node connector dot */}
                <div 
                  className="absolute left-[24px] md:left-1/2 top-3 w-3 h-3 rounded-full bg-[#070707] border-2 border-[#64ffda] -translate-x-1/2 z-10 shadow-[0_0_8px_#64ffda] transition-transform duration-300 hover:scale-125"
                  aria-hidden="true"
                />

                {/* Content Block */}
                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                  {/* Year tag */}
                  <span className="inline-block text-lg font-black tracking-widest text-[#64ffda] font-mono mb-2">
                    [{node.year}]
                  </span>

                  {/* Cyberpunk card layout */}
                  <div 
                    className="relative bg-[#0c0f1d]/75 border border-white/5 p-6 hover:border-indigo-500/25 transition-all duration-300"
                    style={{
                      clipPath: isLeft 
                        ? 'polygon(0% 0%, 96% 0%, 100% 12%, 100% 100%, 4% 100%, 0% 88%)'
                        : 'polygon(0% 12%, 4% 0%, 100% 0%, 100% 88%, 96% 100%, 0% 100%)',
                    }}
                  >
                    {/* Glowing corners */}
                    <div className="absolute top-0 right-0 w-2 h-[1px] bg-indigo-500/40 pointer-events-none" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-indigo-500/40 pointer-events-none" aria-hidden="true" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white font-mono mb-3">
                      {node.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light font-tt-lakes">
                      {node.description}
                    </p>
                  </div>
                </div>

                {/* Balancing spacer */}
                <div className="hidden md:block w-[45%]" aria-hidden="true" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
