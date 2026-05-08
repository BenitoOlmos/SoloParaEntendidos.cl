import { useEffect, useState } from 'react';
import { Waves, ChevronRight, CircleDollarSign, TerminalSquare, Sparkles } from 'lucide-react';

export default function RetroTheme() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#020005] text-white overflow-hidden relative font-sans selection:bg-[#ff00ff] selection:text-white pb-32">
      {/* Capas CRT - Ajustadas para mayor claridad */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-70"></div>
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.6)_100%)]"></div>

      {/* SOL Synthwave de fondo - Corregido para alto contraste */}
      <div 
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-b from-[#fceb00] to-[#ff00ff] shadow-[0_0_120px_rgba(255,0,255,0.8)] z-0 transition-opacity duration-1000"
        style={{ 
          top: '5%', left: '50%', transform: 'translateX(-50%)', 
          opacity: mounted ? 1 : 0, 
          maskImage: 'repeating-linear-gradient(to bottom, black 0%, black 8px, transparent 8px, transparent 12px)', 
          WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0%, black 8px, transparent 8px, transparent 12px)'
        }}
      ></div>

      {/* Contenido Principal */}
      <main className="relative z-20 flex flex-col items-center pt-24 pb-32 w-full min-h-screen">
        <header className="text-center mb-16 px-4 w-full">
          <div className="glitch-wrapper mb-2">
            <h1 
              className="glitch-text text-5xl md:text-[90px] font-black italic tracking-tighter uppercase text-[#00ffff] drop-shadow-[0_0_20px_#00ffff]" 
              data-text="SOLO ENTENDIDOS"
            >
              SOLO ENTENDIDOS
            </h1>
          </div>
          <p className="text-lg md:text-3xl text-[#ff00ff] tracking-[0.4em] font-bold uppercase drop-shadow-[0_0_15px_#ff00ff] bg-black/50 inline-block px-6 py-2 rounded-full border border-[#ff00ff]/30 backdrop-blur-sm">
            ELIGE TU OLA
          </p>
        </header>

        {/* Grid Arcade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto w-full px-6 relative z-30">
          
          <a href="#surf" className="group flex flex-col items-center bg-[#050010]/95 backdrop-blur-xl rounded-2xl p-10 border-2 border-[#00ffff] shadow-[0_0_20px_rgba(0,255,255,0.3),inset_0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300 hover:-translate-y-4 hover:bg-[#09001a] hover:shadow-[0_0_50px_rgba(0,255,255,0.6),inset_0_0_30px_rgba(0,255,255,0.4)] no-underline relative overflow-hidden">
            <div className="absolute top-0 w-full h-[2px] bg-[#00ffff] shadow-[0_0_15px_#00ffff]"></div>
            
            <div className="mb-8 p-5 rounded-full border-2 border-[#00ffff] shadow-[0_0_20px_#00ffff,inset_0_0_15px_#00ffff] group-hover:scale-125 transition-transform duration-500 bg-black">
              <Waves className="w-10 h-10 text-[#00ffff] drop-shadow-[0_0_8px_#00ffff]" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black italic mb-4 text-white tracking-widest uppercase drop-shadow-[0_0_8px_#00ffff]">Surf</h2>
            <p className="text-[15px] leading-relaxed text-[#00ffff] text-center font-mono tracking-wide uppercase px-4 font-semibold">Playas virtuales y reportes de viento cibernético.</p>
            <div className="mt-8 flex items-center justify-center w-full bg-[#00ffff]/10 py-3 border-t border-[#00ffff]/30">
              <span className="text-[#00ffff] text-sm font-mono font-bold tracking-widest uppercase animate-pulse flex items-center group-hover:text-white transition-colors">
                &gt; INSERT COIN <ChevronRight size={16} className="ml-2" />
              </span>
            </div>
          </a>

          <a href="#finanzas" className="group flex flex-col items-center bg-[#050010]/95 backdrop-blur-xl rounded-2xl p-10 border-2 border-[#ff00ff] shadow-[0_0_20px_rgba(255,0,255,0.3),inset_0_0_15px_rgba(255,0,255,0.2)] transition-all duration-300 hover:-translate-y-4 hover:bg-[#09001a] hover:shadow-[0_0_50px_rgba(255,0,255,0.6),inset_0_0_30px_rgba(255,0,255,0.4)] no-underline relative overflow-hidden">
            <div className="absolute top-0 w-full h-[2px] bg-[#ff00ff] shadow-[0_0_15px_#ff00ff]"></div>
            
            <div className="mb-8 p-5 rounded-full border-2 border-[#ff00ff] shadow-[0_0_20px_#ff00ff,inset_0_0_15px_#ff00ff] group-hover:scale-125 transition-transform duration-500 bg-black">
              <CircleDollarSign className="w-10 h-10 text-[#ff00ff] drop-shadow-[0_0_8px_#ff00ff]" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black italic mb-4 text-white tracking-widest uppercase drop-shadow-[0_0_8px_#ff00ff]">Finanzas</h2>
            <p className="text-[15px] leading-relaxed text-[#ff00ff] text-center font-mono tracking-wide uppercase px-4 font-semibold">Bases de datos económicas. Ingresos directos.</p>
            <div className="mt-8 flex items-center justify-center w-full bg-[#ff00ff]/10 py-3 border-t border-[#ff00ff]/30">
              <span className="text-[#ff00ff] text-sm font-mono font-bold tracking-widest uppercase animate-pulse flex items-center group-hover:text-white transition-colors">
                &gt; PLAYER 1 <ChevronRight size={16} className="ml-2" />
              </span>
            </div>
          </a>

          <a href="#tech" className="group flex flex-col items-center bg-[#050010]/95 backdrop-blur-xl rounded-2xl p-10 border-2 border-[#fceb00] shadow-[0_0_20px_rgba(252,235,0,0.3),inset_0_0_15px_rgba(252,235,0,0.2)] transition-all duration-300 hover:-translate-y-4 hover:bg-[#09001a] hover:shadow-[0_0_50px_rgba(252,235,0,0.6),inset_0_0_30px_rgba(252,235,0,0.4)] no-underline relative overflow-hidden">
            <div className="absolute top-0 w-full h-[2px] bg-[#fceb00] shadow-[0_0_15px_#fceb00]"></div>
            
            <div className="mb-8 p-5 rounded-full border-2 border-[#fceb00] shadow-[0_0_20px_#fceb00,inset_0_0_15px_#fceb00] group-hover:scale-125 transition-transform duration-500 bg-black">
              <TerminalSquare className="w-10 h-10 text-[#fceb00] drop-shadow-[0_0_8px_#fceb00]" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black italic mb-4 text-white tracking-widest uppercase drop-shadow-[0_0_8px_#fceb00]">Servicios IT</h2>
            <p className="text-[15px] leading-relaxed text-[#fceb00] text-center font-mono tracking-wide uppercase px-4 font-semibold">Arquitectura de servidores. Inyección digital.</p>
            <div className="mt-8 flex items-center justify-center w-full bg-[#fceb00]/10 py-3 border-t border-[#fceb00]/30">
              <span className="text-[#fceb00] text-sm font-mono font-bold tracking-widest uppercase animate-pulse flex items-center group-hover:text-white transition-colors">
                &gt; RUN SYS <ChevronRight size={16} className="ml-2" />
              </span>
            </div>
          </a>

        </div>
      </main>

      {/* Escena Inferior Espectacular */}
      <div className="absolute bottom-0 w-full h-[35vh] z-10 overflow-hidden pointer-events-none">
        
        {/* Neon Floor Grid */}
        <div className="absolute inset-0 origin-bottom" style={{ perspective: '300px' }}>
          <div 
            className="absolute w-[300%] h-[200%] left-[-100%] bottom-0" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.8) 2px, transparent 2px), linear-gradient(90deg, rgba(0, 255, 255, 0.6) 2px, transparent 2px)', 
              backgroundSize: '40px 40px', 
              transform: 'rotateX(75deg)', 
              transformOrigin: 'bottom center', 
              maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 80%)', 
              WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 80%)',
              animation: 'var(--animate-retroGridMove)' 
            }}
          ></div>
        </div>
        
        {/* Laser Horizon */}
        <div className="absolute bottom-[25vh] w-full h-[3px] bg-[#ff00ff] shadow-[0_0_20px_#ff00ff,0_0_40px_#00ffff] z-10"></div>
        
        {/* Surfistas Dinámicos y Claros */}
        <div className="absolute w-full h-full bottom-0 left-0 z-20">
          
          <div className="absolute drop-shadow-[0_0_20px_#ff00ff]" style={{ left: '15%', bottom: '40px', animation: 'var(--animate-retroSurfFloat)' }}>
            <svg width="200" height="150" viewBox="0 0 100 100" fill="none">
              <path d="M5,80 C30,90 70,50 95,70" stroke="#ff00ff" strokeWidth="4" strokeLinecap="round" />
              <path d="M20,80 L75,65" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
              <path d="M80,68 C 85,65 95,70 105,65" stroke="#fceb00" strokeWidth="2" strokeDasharray="3 3"/>
              <circle cx="45" cy="35" r="7" stroke="#ff00ff" strokeWidth="3" fill="#00ffff" />
              <path d="M45,42 L40,65 M40,65 L25,75 M40,65 L55,70 M30,50 L60,45" stroke="#ff00ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="absolute drop-shadow-[0_0_25px_#00ffff]" style={{ left: '60%', bottom: '20px', animation: 'var(--animate-retroSurfFloat)' }}>
            <svg width="240" height="200" viewBox="0 0 100 100" fill="none">
              <path d="M5,70 C30,100 70,90 95,50" stroke="#00ffff" strokeWidth="5" strokeLinecap="round" />
              <path d="M15,80 L80,55" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
              <circle cx="45" cy="25" r="8" stroke="#00ffff" strokeWidth="4" fill="#ff00ff" />
              <path d="M45,33 L40,65 M40,65 L20,80 M40,65 L55,70 M25,45 L65,35" stroke="#00ffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}
