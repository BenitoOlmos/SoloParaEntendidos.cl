import { useState, useEffect } from 'react';
import { cardsData } from '../data';

export default function NeoBrutalismLayout() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getCardColor = (idx) => {
    const colors = ['bg-[#FF90E8]', 'bg-[#23A094]', 'bg-[#90A8ED]'];
    return colors[idx % colors.length];
  };

  return (
    <div className="min-h-screen bg-[#F1F333] selection:bg-black selection:text-[#F1F333] font-sans flex flex-col items-center pt-10 pb-40 relative overflow-hidden">
      
      {/* Scope CSS for Marquee and Halftone */}
      <style>{`
        .halftone-bg {
          background-image: radial-gradient(circle, #000 2px, transparent 2.5px);
          background-size: 15px 15px;
          opacity: 0.15;
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
        }
        .marquee-container {
          overflow: hidden; white-space: nowrap; width: 100vw; background: black; color: white;
          border-top: 4px solid black; border-bottom: 4px solid black; padding: 10px 0; z-index: 50; position: absolute;
        }
        .marquee {
          display: inline-block; animation: marquee 15s linear infinite; font-weight: 900; text-transform: uppercase; font-size: 1.5rem; letter-spacing: 2px;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .text-outline {
          -webkit-text-stroke: 2px black; color: transparent;
        }
      `}</style>
      
      {/* Halftone Pattern Overlay */}
      <div className="halftone-bg"></div>

      {/* Extreme Marquee Bars */}
      <div className="marquee-container top-0 -rotate-2 scale-110 shadow-[0_8px_0_rgba(0,0,0,1)]">
        <div className="marquee">
          ELIGE TU PRÓXIMA OLA 💥 SOLO ENTENDIDOS 💥 NO PARES DE NAVEGAR 💥 ELIGE TU PRÓXIMA OLA 💥 SOLO ENTENDIDOS 💥 NO PARES DE NAVEGAR 💥 
          ELIGE TU PRÓXIMA OLA 💥 SOLO ENTENDIDOS 💥 NO PARES DE NAVEGAR 💥 ELIGE TU PRÓXIMA OLA 💥 SOLO ENTENDIDOS 💥 NO PARES DE NAVEGAR 💥
        </div>
      </div>

      <header className="text-center mb-20 z-20 mt-32 border-[6px] border-black bg-white p-10 shadow-[16px_16px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[24px_24px_0px_rgba(0,0,0,1)] active:translate-y-[16px] active:translate-x-[16px] active:shadow-none transition-all cursor-pointer">
        <h1 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter text-black mb-2 leading-none">
          Solo <span className="text-outline italic">Entendidos</span>
        </h1>
        <p className="text-xl md:text-3xl font-bold border-t-[6px] border-black pt-6 mt-4 mix-blend-difference text-black">
          NO CUALQUIERA SURFEA ESTO.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto w-full px-6 z-20">
        {cardsData.map((card, idx) => (
          <a
            key={card.id}
            href={`#${card.id}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex flex-col border-[6px] border-black ${getCardColor(idx)} p-10 shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-3 hover:-translate-x-3 hover:shadow-[24px_24px_0px_rgba(0,0,0,1)] active:translate-y-[12px] active:translate-x-[12px] active:shadow-none no-underline text-black group relative`}
          >
            {/* Absolute badge */}
            <div className="absolute -top-6 -right-6 bg-white border-[4px] border-black w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl shadow-[4px_4px_0_black] group-hover:rotate-180 transition-transform duration-500 z-10">
              *
            </div>

            <div className="mb-8 bg-white border-[6px] border-black w-28 h-28 flex items-center justify-center rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform duration-300">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
              </svg>
            </div>
            <h2 className="text-4xl font-black mb-4 uppercase leading-[1.1]">{card.title}</h2>
            <p className="text-xl font-bold bg-white p-4 border-[4px] border-black shadow-[4px_4px_0_black]">
              {card.description}
            </p>
          </a>
        ))}
      </div>

      {/* Massive Brutalist Waves */}
      <div className="absolute bottom-0 w-full h-[300px] z-10 flex overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-[200%] h-48 bottom-16 animate-[moveWave_8s_linear_infinite]">
          <path d="M0,60 L200,10 L400,110 L600,10 L800,110 L1000,10 L1200,110 L1200,120 L0,120 Z" fill="#FF90E8" stroke="black" strokeWidth="8" strokeLinejoin="miter"/>
        </svg>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-[200%] h-40 bottom-0 animate-[moveWave_6s_linear_infinite_reverse]">
          <path d="M0,60 L150,110 L300,60 L450,10 L600,60 L750,110 L900,60 L1050,10 L1200,60 L1200,120 L0,120 Z" fill="#23A094" stroke="black" strokeWidth="8" strokeLinejoin="miter"/>
        </svg>
        <div className="absolute bottom-0 w-full h-8 bg-black"></div>
      </div>

      {/* Intense Brutalist Surfer 1 */}
      <div 
        className="absolute z-20 transition-all duration-[400ms] ease-out"
        style={{
          left: hoveredIndex !== null ? `calc(${15 + hoveredIndex * 35}% - 80px)` : '30%',
          bottom: hoveredIndex !== null ? '180px' : '90px',
          transform: hoveredIndex !== null ? 'rotate(-15deg) scale(1.3)' : 'rotate(5deg) scale(1)',
        }}
      >
        <div className="relative hover:scale-110 transition-transform active:translate-y-4 cursor-pointer">
          <div className="absolute top-3 left-3 w-32 h-32 bg-black rounded-xl"></div>
          <div className="relative w-32 h-32 bg-white border-[6px] border-black rounded-xl flex items-center justify-center">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#F1F333" stroke="black" strokeWidth="4" strokeLinecap="square">
              <rect x="4" y="4" width="16" height="16" fill="#F1F333"></rect>
              <circle cx="12" cy="12" r="4" fill="black"></circle>
              <path d="M0 22h24" strokeWidth="6"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Intense Brutalist Surfer 2 */}
      <div 
        className="absolute z-20 transition-all duration-[600ms] ease-out"
        style={{
          left: hoveredIndex !== null ? `calc(${15 + hoveredIndex * 35}% + 100px)` : '65%',
          bottom: hoveredIndex !== null ? '140px' : '50px',
          transform: hoveredIndex !== null ? 'rotate(20deg) scale(1.4)' : 'rotate(-10deg) scale(0.9)',
        }}
      >
        <div className="relative hover:scale-110 transition-transform active:translate-y-4 cursor-pointer">
          <div className="absolute top-3 left-3 w-32 h-32 bg-black rounded-full"></div>
          <div className="relative w-32 h-32 bg-[#FF90E8] border-[6px] border-black rounded-full flex items-center justify-center overflow-hidden">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="4" strokeLinecap="square">
              <polygon points="12,2 22,20 2,20"></polygon>
              <path d="M0 22h24" strokeWidth="6"></path>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
