"use client";
import React, { useState, useEffect } from 'react';
import { ShieldAlert, ShieldCheck, FileText, Zap } from 'lucide-react';
import { cn } from "../../lib/utils";

// Stats data with numeric values for animation
const stats = [
  { 
    id: 1,
    numeric: 152,
    suffix: "k+",
    label: "Documents Digitized", 
    icon: FileText, 
    color: "text-emerald-400", 
    iconBg: "bg-emerald-400/10",
    borderColor: "border-emerald-500/20",
    shadowColor: "shadow-emerald-500/20",
    position: "-translate-x-[180px] -translate-y-[140px]", 
    origin: "bottom-right"
  },
  { 
    id: 2,
    numeric: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Accuracy Rate", 
    icon: ShieldCheck, 
    color: "text-brandLight", 
    iconBg: "bg-brand/20",
    borderColor: "border-brandLight/20",
    shadowColor: "shadow-brandLight/20",
    position: "translate-x-[180px] -translate-y-[140px]",
    origin: "bottom-left"
  },
  { 
    id: 3,
    numeric: 4.7,
    prefix: "$",
    suffix: "M",
    decimals: 1,
    label: "Losses Prevented", 
    icon: ShieldAlert, 
    color: "text-rose-400", 
    iconBg: "bg-rose-400/10",
    borderColor: "border-rose-500/20",
    shadowColor: "shadow-rose-500/20",
    position: "-translate-x-[180px] translate-y-[140px]", 
    origin: "top-right"
  },
  { 
    id: 4,
    numeric: 30,
    suffix: "%",
    label: "Efficiency Boost", 
    icon: Zap, 
    color: "text-blue-400", 
    iconBg: "bg-blue-400/10",
    borderColor: "border-blue-500/20",
    shadowColor: "shadow-blue-500/20",
    position: "translate-x-[180px] translate-y-[140px]", 
    origin: "top-left"
  },
];

// Animated Counter Component
const AnimatedCounter = ({ 
  value, 
  duration = 1500, 
  delay = 0, 
  decimals = 0, 
  isHovered 
}: { 
  value: number, 
  duration?: number, 
  delay?: number, 
  decimals?: number, 
  isHovered: boolean 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isHovered) {
        setCount(0);
        return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;
    
    // Add a small initial delay before counting starts to match visual pop-in
    const timeoutId = setTimeout(() => {
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Cubic ease-out function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setCount(easeOut * value);
    
            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };
        animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration, delay, isHovered]);

  return <>{count.toFixed(decimals)}</>;
};

export default function ScannerHoverCard() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Tick configuration for the organic wave effect
  const tickCount = 48;
  const ticks = Array.from({ length: tickCount }).map((_, i) => i);

  return (
    <div 
      className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] flex items-center justify-center perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animation Definitions */}
      <style>{`
        @keyframes spinner-fade {
          0% { 
            opacity: 1; 
            transform: scale(1.3); 
            background-color: #22d3ee; /* Cyan-400 */
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.9);
          }
          45% {
             opacity: 0.6;
             transform: scale(1);
             background-color: rgba(34, 211, 238, 0.4); 
             box-shadow: 0 0 5px rgba(34, 211, 238, 0.2);
          }
          100% { 
            opacity: 0.1; 
            transform: scale(0.9); 
            background-color: rgba(255, 255, 255, 0.1); 
            box-shadow: none; 
          }
        }
        @keyframes scan-beam {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes data-stream {
          to { stroke-dashoffset: -40; }
        }
        @keyframes orbit-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float-center {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
      `}</style>

      {/* 1. Ambient Background Glow */}
      <div className={cn(
        "absolute inset-0 rounded-full blur-[90px] transition-all duration-1000 pointer-events-none",
        isHovered ? "bg-brand/20 scale-110 opacity-60" : "bg-cyan-500/10 scale-90 opacity-20"
      )}></div>

      {/* 2. Idle State: Organic Wave Spinner (Visible when NOT hovered) */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none",
        isHovered ? "opacity-0 scale-150 blur-sm" : "opacity-100 scale-[0.7] sm:scale-100 blur-0"
      )}>
         {/* Wave Ticks Container - 440px */}
         <div className="absolute w-[440px] h-[440px]">
            {ticks.map((i) => (
                <div
                    key={i}
                    // Outer Wrapper: Rotates the entire coordinate system for this tick
                    className="absolute inset-0" 
                    style={{ 
                      transform: `rotate(${i * (360 / tickCount)}deg)`,
                    }}
                >
                    {/* Inner Tick: Positioned at top, animates independently */}
                    <div 
                        className="absolute top-0 left-1/2 w-[6px] h-[26px] -ml-[3px] rounded-full"
                        style={{ 
                            animation: `spinner-fade 1.5s linear infinite`,
                            animationDelay: `${i * (1.5 / tickCount)}s`
                        }}
                    />
                </div>
            ))}
         </div>
         
         {/* Inner Pulsing Circle (Cyan Tinted) */}
         <div className="absolute w-[280px] h-[280px] rounded-full border border-cyan-500/10 animate-[pulse_4s_ease-in-out_infinite] bg-cyan-500/5"></div>

         {/* Center Reticle */}
         <div className="absolute w-[240px] h-[240px] border border-white/5 rounded-full opacity-30"></div>
      </div>

      {/* 3. Hover State: Holographic Interface (Visible when HOVERED) */}
      <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-1000 pointer-events-none",
          isHovered ? "opacity-100" : "opacity-0"
      )}>
         {/* Outer Data Ring */}
         <div className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-brandLight/20 animate-[orbit-slow_40s_linear_infinite]"></div>
         
         {/* Inner Tech Ring */}
         <div className="absolute w-[440px] h-[440px] rounded-full border border-dotted border-white/10 animate-[orbit-reverse_30s_linear_infinite]"></div>
      </div>

      {/* 4. Central Hub (Logo) */}
      <div className="relative z-40 group" style={{ animation: isHovered ? 'none' : 'float-center 6s ease-in-out infinite' }}>
         {/* Active Glow */}
         <div className={cn(
             "absolute inset-0 bg-brand/30 blur-2xl rounded-2xl transition-all duration-500",
             isHovered ? "opacity-100 scale-110" : "opacity-0 scale-90"
         )}></div>

         {/* Main Container */}
         <div className={cn(
           "relative bg-[#0F0826] px-8 py-5 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-500 border border-white/10 z-10",
           isHovered ? "scale-105 border-brandLight/40 shadow-[0_0_50px_rgba(139,109,255,0.3)]" : "scale-100"
         )}>
             {/* Scanning Beam */}
             <div className={cn(
               "absolute -top-[20%] left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-brandLight/30 to-transparent blur-sm opacity-0 pointer-events-none z-20",
               isHovered && "animate-[scan-beam_2s_linear_infinite]"
             )}></div>
             
             {/* Logo Image */}
             <img 
               src="https://storage.googleapis.com/msgsndr/cfHHpIl0xs1OVDdwIYpy/media/670f25472e9d945d7fcfa614.png" 
               alt="LedgerPRO Logo" 
               className={cn(
                 "w-[160px] h-auto object-contain relative z-10 transition-all duration-300", 
                 isHovered ? "brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "brightness-100"
               )}
             />
             
             {/* Tech Grid Overlay on Logo (Subtle) */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
         </div>
      </div>

      {/* 5. Connecting Data Lines (Only visible on hover) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
         {stats.map((stat, i) => {
           const ox = i % 2 === 0 ? 140 : -140; 
           const oy = i > 1 ? 100 : -100;
           
           // Match stroke color to text color class roughly
           const strokeColor = stat.color.includes('emerald') ? '#34d399' : 
                               stat.color.includes('rose') ? '#fb7185' : 
                               stat.color.includes('blue') ? '#60a5fa' : '#a78bfa';

           return (
             <g key={i}>
                <line 
                  x1="50%" y1="50%" 
                  x2={`calc(50% + ${ox}px)`} y2={`calc(50% + ${oy}px)`}
                  stroke={strokeColor}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className={cn(
                    "transition-all duration-500 ease-out", 
                    isHovered ? "opacity-40" : "opacity-0"
                  )}
                  style={{ 
                    animation: isHovered ? 'data-stream 1s linear infinite' : 'none'
                  }}
                />
                {/* Connection Dot */}
                <circle 
                   cx={`calc(50% + ${ox}px)`} cy={`calc(50% + ${oy}px)`} 
                   r="3" 
                   fill={strokeColor}
                   className={cn("transition-all duration-300 delay-300", isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0")}
                />
             </g>
           )
         })}
      </svg>

      {/* 6. Info Cards (Only visible on hover) */}
      {stats.map((stat, i) => (
        <div
          key={stat.id}
          className={cn(
            "absolute top-1/2 left-1/2 w-[240px] p-4 rounded-xl border backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 flex flex-col gap-2 cursor-default group/card",
            isHovered ? `opacity-100 ${stat.position}` : "opacity-0 scale-75 translate-x-0 translate-y-0 pointer-events-none",
            "bg-[#0B0C15]/90 hover:bg-[#131420]", // Darker background for better contrast
            stat.borderColor,
            isHovered ? stat.shadowColor : "" // Add subtle colored glow on hover
          )}
          style={{ 
            marginTop: '-45px', 
            marginLeft: '-120px',
            transitionDelay: `${i * 100}ms`
          }}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between">
             <div className={cn("p-1.5 rounded-lg flex items-center justify-center border border-white/5", stat.iconBg)}>
                <stat.icon size={14} className={stat.color} />
             </div>
             <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", stat.color.replace('text-', 'bg-'))}></div>
          </div>

          {/* Dynamic Number */}
          <div className="mt-1">
            <span className="text-3xl font-bold text-white tracking-tight font-sans">
              {stat.prefix}
              <AnimatedCounter 
                 value={stat.numeric} 
                 duration={2000} 
                 delay={i * 100 + 300} 
                 decimals={stat.decimals}
                 isHovered={isHovered} 
              />
              {stat.suffix}
            </span>
            
            <div className={cn("h-[2px] w-0 group-hover/card:w-full transition-all duration-700 mt-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50", stat.color)}></div>
            
            <span className={cn("text-[10px] font-mono uppercase tracking-widest opacity-70 block mt-2", stat.color)}>
              {stat.label}
            </span>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 rounded-tr-sm"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 rounded-bl-sm"></div>
        </div>
      ))}

    </div>
  );
}