import { useState, useEffect } from 'react';
import { cardsData } from '../data';
import { Layers, PieChart, Box } from 'lucide-react';

export default function SplineLayout() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'surf': return <Layers size={40} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]" strokeWidth={1.5} />;
      case 'finance': return <PieChart size={40} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]" strokeWidth={1.5} />;
      case 'tech': return <Box size={40} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]" strokeWidth={1.5} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E11] text-white flex flex-col pt-20 pb-32 relative overflow-hidden font-sans">
      
      {/* Scope CSS for cinematic grain */}
      <style>{`
        .cinematic-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.08; pointer-events: none; position: absolute; inset: 0; z-index: 50; mix-blend-mode: screen;
        }
      `}</style>
      
      {/* 3D WebGL Grain Overlay */}
      <div className="cinematic-grain"></div>

      {/* 3D gradient blobs moving with mouse - Deep Depth */}
      <div 
        className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-800 to-blue-600 rounded-full blur-[120px] opacity-70 mix-blend-screen transition-transform duration-1000 ease-out z-0"
        style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
      ></div>
      <div 
        className="absolute bottom-[20%] right-[10%] w-[700px] h-[700px] bg-gradient-to-tl from-pink-600 to-orange-500 rounded-full blur-[140px] opacity-60 mix-blend-screen transition-transform duration-[1200ms] ease-out z-0"
        style={{ transform: `translate(${-mousePos.x * 2.5}px, ${-mousePos.y * 2.5}px)` }}
      ></div>

      <header className="text-center mb-24 z-20 mt-16 px-4 transition-transform duration-700 ease-out" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}>
        <h1 className="text-6xl md:text-[90px] font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          Solo para Entendidos
        </h1>
        <p className="text-xl md:text-3xl font-light text-white/50 tracking-widest mt-6 mix-blend-screen">
          Explora la siguiente dimensión.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full px-6 z-20 mb-32" style={{ perspective: '1000px' }}>
        {cardsData.map((card, idx) => (
          <a
            key={card.id}
            href={`#${card.id}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group flex flex-col items-center bg-black/20 backdrop-blur-[30px] saturate-150 rounded-[2.5rem] p-10 border border-t-white/30 border-l-white/20 border-r-white/5 border-b-white/5 shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-[600ms] hover:-translate-y-6 hover:bg-white/10 hover:border-t-white/50 hover:shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.1)] no-underline"
            style={{ transform: `rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)` }}
          >
            <div className="mb-10 w-24 h-24 bg-gradient-to-br from-white/20 to-white/0 rounded-2xl border border-white/20 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(255,255,255,0.2)] group-hover:rotate-[20deg] group-hover:scale-125 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
              {getIcon(card.iconType)}
            </div>
            <h2 className="text-3xl font-semibold mb-4 tracking-wide text-white drop-shadow-md">{card.title}</h2>
            <p className="text-base leading-relaxed text-white/60 text-center font-light">
              {card.description}
            </p>
          </a>
        ))}
      </div>

      {/* Refractive 3D Glass Waves */}
      <div className="absolute bottom-0 w-full h-[300px] z-10 flex overflow-hidden opacity-90" style={{ transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 0.5}px)` }}>
        <div className="absolute bottom-[-10%] w-[200%] h-60 bg-gradient-to-t from-blue-700/40 to-cyan-400/20 backdrop-blur-[40px] saturate-200 rounded-[50%] animate-[moveWave_20s_linear_infinite] border-t border-white/30 shadow-[0_-10px_30px_rgba(0,100,255,0.3),inset_0_2px_10px_rgba(255,255,255,0.5)]"></div>
        <div className="absolute bottom-[-20%] left-[-50%] w-[200%] h-64 bg-gradient-to-t from-purple-800/40 to-pink-500/20 backdrop-blur-[60px] saturate-200 rounded-[50%] animate-[moveWave_15s_linear_infinite_reverse] border-t border-white/20 shadow-[0_-10px_50px_rgba(255,0,255,0.2),inset_0_2px_10px_rgba(255,255,255,0.4)]"></div>
      </div>

      {/* Extreme 3D Surfer 1 - Sphere in Box */}
      <div 
        className="absolute z-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          left: hoveredIndex !== null ? `calc(${15 + hoveredIndex * 35}% - 40px)` : '30%',
          bottom: hoveredIndex !== null ? '150px' : '80px',
          transform: `translate(-50%, 0) rotateX(${mousePos.y * 3}deg) rotateY(${mousePos.x * 3}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="w-32 h-32 rounded-full border border-white/30 backdrop-blur-[50px] bg-gradient-to-tr from-white/40 to-white/5 shadow-[0_20px_50px_rgba(0,150,255,0.6),inset_0_0_30px_rgba(255,255,255,0.6)] flex items-center justify-center animate-[surfBob_4s_ease-in-out_infinite]">
          <div className="w-20 h-4 border-b-2 border-l-2 border-t border-white rounded-[50%] rotate-[-20deg] shadow-[0_10px_20px_rgba(0,0,0,0.5)]"></div>
          <div className="absolute w-6 h-6 bg-white rounded-full translate-y-[-15px] drop-shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
        </div>
      </div>

      {/* Extreme 3D Surfer 2 - Polygons */}
      <div 
        className="absolute z-20 transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          left: hoveredIndex !== null ? `calc(${15 + hoveredIndex * 35}% + 100px)` : '70%',
          bottom: hoveredIndex !== null ? '180px' : '90px',
          transform: `translate(-50%, 0) rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * -3}deg) rotateZ(10deg)`,
        }}
      >
        <div className="w-28 h-28 rounded-2xl border-t border-l border-white/50 border-r border-b border-white/10 backdrop-blur-md bg-gradient-to-tr from-pink-500/40 to-orange-400/10 shadow-[0_20px_50px_rgba(255,100,200,0.5),inset_0_0_20px_rgba(255,255,255,0.3)] flex flex-col items-center justify-center animate-[surfBob_3.5s_ease-in-out_infinite_1s]">
           <div className="w-8 h-8 border-[3px] border-white rounded-full translate-y-[-5px] shadow-[0_0_20px_rgba(255,255,255,1)] mb-2"></div>
           <div className="w-16 h-3 bg-white/40 backdrop-blur-xl rounded border border-white/80 shadow-[0_10px_10px_rgba(0,0,0,0.4)]"></div>
        </div>
      </div>
    </div>
  );
}
