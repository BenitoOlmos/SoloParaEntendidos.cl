import { useState, useEffect } from 'react';
import { cardsData } from '../data';

export default function RetroY2KLayout() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'surf': return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2.5" className="drop-shadow-[0_0_10px_#00ffff]">
          <path d="M2 12h20M12 2v20M5 5l14 14M19 5L5 19" />
        </svg>
      );
      case 'finance': return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff00ff" strokeWidth="2" className="drop-shadow-[0_0_8px_#ff00ff]">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
      case 'tech': return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fceb00" strokeWidth="2.5" className="drop-shadow-[0_0_10px_#fceb00]">
          <polygon points="12 2 22 22 2 22" />
        </svg>
      );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#06000a] overflow-hidden relative font-sans flex flex-col items-center pt-24 pb-32">
      
      {/* Scoped CSS for Glitch & CRT */}
      <style>{`
        .glitch-text { position: relative; display: inline-block; }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.8;
        }
        .glitch-text::before {
          left: 2px; text-shadow: -2px 0 red; clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px; text-shadow: -2px 0 cyan; clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2.5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(10px, 9999px, 80px, 0); transform: translate(2px); }
          20% { clip: rect(80px, 9999px, 12px, 0); transform: translate(-2px); }
          40% { clip: rect(30px, 9999px, 40px, 0); transform: translate(2px); }
          60% { clip: rect(90px, 9999px, 20px, 0); transform: translate(-2px); }
          80% { clip: rect(20px, 9999px, 60px, 0); transform: translate(2px); }
          100% { clip: rect(50px, 9999px, 30px, 0); transform: translate(-2px); }
        }
        @keyframes glitch-anim-2 {
          0% { clip: rect(60px, 9999px, 10px, 0); transform: translate(-2px); }
          20% { clip: rect(20px, 9999px, 50px, 0); transform: translate(2px); }
          40% { clip: rect(80px, 9999px, 20px, 0); transform: translate(-2px); }
          60% { clip: rect(10px, 9999px, 80px, 0); transform: translate(2px); }
          80% { clip: rect(50px, 9999px, 30px, 0); transform: translate(-2px); }
          100% { clip: rect(30px, 9999px, 90px, 0); transform: translate(2px); }
        }
        .crt-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05; pointer-events: none; position: absolute; inset: 0; z-index: 50; mix-blend-mode: overlay;
        }
        .crt-scanlines {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%; pointer-events: none; position: absolute; inset: 0; z-index: 51;
        }
        .crt-vignette {
          background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%);
          pointer-events: none; position: absolute; inset: 0; z-index: 52;
        }
      `}</style>
      
      {/* VCR Overlays */}
      <div className="crt-noise"></div>
      <div className="crt-scanlines"></div>
      <div className="crt-vignette"></div>

      {/* Retrowave Sunset Dynamic Parallax */}
      <div 
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-b from-[#fceb00] via-[#ff00ff] to-[#090014] shadow-[0_0_120px_#ff007f] z-0 transition-transform duration-200 ease-out" 
        style={{
          top: '5%', left: '50%',
          transform: `translate(calc(-50% + ${mousePos.x * 30}px), ${mousePos.y * 15}px)`,
          maskImage: 'repeating-linear-gradient(to bottom, black 0%, black 85%, transparent 85%, transparent 100%)',
          WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0%, black 85%, transparent 85%, transparent 100%)',
          maskSize: '100% 12px',
          WebkitMaskSize: '100% 12px'
        }}
      ></div>

      <header className="relative z-20 text-center mb-20 px-4">
        <h1 
          className="glitch-text text-6xl md:text-8xl font-black italic tracking-widest uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-b from-[#00ffff] to-[#ff00ff] drop-shadow-[0_0_20px_rgba(255,0,255,1)]" 
          style={{ WebkitTextStroke: '2px white' }}
          data-text="SOLO ENTENDIDOS"
        >
          SOLO ENTENDIDOS
        </h1>
        <p className="text-xl md:text-3xl text-[#fceb00] tracking-[0.5em] font-bold drop-shadow-[0_0_10px_#fceb00] uppercase mt-2">
          Elige Tu Ola
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full px-6 z-20">
        {cardsData.map((card, idx) => (
          <a
            key={card.id}
            href={`#${card.id}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group flex flex-col items-center bg-black/60 backdrop-blur-md rounded-xl p-10 border-2 border-[#ff00ff]/50 shadow-[0_0_15px_rgba(255,0,255,0.2),inset_0_0_20px_rgba(0,255,255,0.05)] transition-all duration-300 hover:-translate-y-4 hover:border-[#00ffff] hover:bg-[#1a0033]/80 hover:shadow-[0_0_40px_#00ffff,inset_0_0_40px_rgba(255,0,255,0.4)] no-underline relative overflow-hidden"
          >
            {/* Scanline card highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[moveWave_2s_linear_infinite] pointer-events-none"></div>
            
            <div className="mb-6 group-hover:scale-125 transition-transform duration-500">
              {getIcon(card.iconType)}
            </div>
            <h2 className="text-2xl font-bold mb-3 text-white tracking-widest uppercase drop-shadow-[0_0_8px_#ff00ff]">{card.title}</h2>
            <p className="text-sm leading-relaxed text-[#00ffff] text-center font-mono tracking-wide">
              {card.description}
            </p>
          </a>
        ))}
      </div>

      {/* Cyberpunk Laser Grid / Waves rotating with Mouse */}
      <div 
        className="absolute bottom-0 w-full h-[45vh] z-10 overflow-hidden" 
        style={{ perspective: '800px' }}
      >
        <div 
          className="absolute w-[300%] h-[200%] bottom-[-20%] left-[-100%] animate-[gridMove_1.5s_linear_infinite] transition-transform duration-200 ease-out"
          style={{
            backgroundImage: `linear-gradient(rgba(255,0,255,0.8) 2px, transparent 2px), linear-gradient(90deg, rgba(0,255,255,0.8) 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
            transform: `rotateX(75deg) rotateY(${mousePos.x * 10}deg) translateX(${mousePos.x * -200}px)`,
            transformOrigin: 'bottom center',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 5%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 5%, transparent 70%)'
          }}
        ></div>
        
        {/* Neon Wireframe Waves overlapping */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-[200%] h-40 bottom-16 animate-[moveWave_6s_linear_infinite]" style={{ transform: `translateX(${mousePos.x * -40}px)` }}>
          <path d="M0,60 C300,10 600,110 1200,60 L1200,120 L0,120 Z" fill="none" stroke="#ff00ff" strokeWidth="5" className="drop-shadow-[0_0_15px_#ff00ff]"/>
        </svg>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-[200%] h-32 bottom-8 animate-[moveWave_4s_linear_infinite_reverse]" style={{ transform: `translateX(${mousePos.x * 60}px)` }}>
          <path d="M0,60 C300,110 600,10 1200,60 L1200,120 L0,120 Z" fill="none" stroke="#00ffff" strokeWidth="5" className="drop-shadow-[0_0_15px_#00ffff]"/>
        </svg>
      </div>

      {/* Extreme Neon Surfer 1 */}
      <div 
        className="absolute z-20 transition-all duration-[600ms] ease-out drop-shadow-[0_0_20px_#ff00ff]"
        style={{
          left: hoveredIndex !== null ? `calc(${15 + hoveredIndex * 35}% - 80px)` : '25%',
          bottom: hoveredIndex !== null ? '200px' : '100px',
          transform: `translate(${mousePos.x * -60}px, 0)`
        }}
      >
        <div className="animate-[surfBob_2s_ease-in-out_infinite]">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5,80 Q50,95 95,70 L90,65 Q50,85 10,75 Z" fill="black" stroke="#ff00ff" strokeWidth="4" />
            <circle cx="65" cy="25" r="8" fill="black" stroke="#00ffff" strokeWidth="4" />
            <path d="M65,33 L60,60 L45,80 M60,60 L75,76 M65,45 L40,50 M65,45 L85,40" stroke="#00ffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Speed lines */}
            <path d="M10,95 L40,95 M20,100 L50,100" stroke="#fceb00" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Extreme Neon Surfer 2 */}
      <div 
        className="absolute z-20 transition-all duration-[800ms] ease-out drop-shadow-[0_0_20px_#00ffff]"
        style={{
          left: hoveredIndex !== null ? `calc(${15 + hoveredIndex * 35}% + 80px)` : '75%',
          bottom: hoveredIndex !== null ? '180px' : '70px',
          transform: `translate(${mousePos.x * 60}px, 0)`
        }}
      >
        <div className="animate-[surfBob_2.5s_ease-in-out_infinite_1s]">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5,70 Q50,85 95,55 L90,50 Q50,75 10,65 Z" fill="black" stroke="#00ffff" strokeWidth="4" />
            <circle cx="35" cy="20" r="8" fill="black" stroke="#fceb00" strokeWidth="4" />
            <path d="M35,28 L40,55 L25,75 M40,55 L55,70 M35,40 L10,45 M35,40 L55,35" stroke="#ff00ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Speed lines */}
            <path d="M5,85 L35,85 M15,90 L45,90" stroke="#00ffff" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>

    </div>
  );
}
