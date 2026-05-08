import { useEffect, useState } from 'react';
import { Waves, Wallet, Cpu, ChevronRight } from 'lucide-react';

export default function ThreeDTheme() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Efecto Parallax suave basado en el ratón
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#02000A] text-white font-sans selection:bg-[#c084fc] selection:text-white overflow-x-hidden pb-32" style={{ perspective: '1200px' }}>
      
      {/* Luces Ambientales 3D (Orbes Desenfocados Ultra-Vibrantes) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#a855f7] rounded-full blur-[160px] opacity-40 mix-blend-screen" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, transition: 'transform 0.1s ease-out' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-[#d946ef] rounded-full blur-[180px] opacity-30 mix-blend-screen" style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`, transition: 'transform 0.1s ease-out' }}></div>
        <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-[#06b6d4] rounded-full blur-[140px] opacity-30 mix-blend-screen" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`, transition: 'transform 0.1s ease-out' }}></div>
      </div>

      <main className="relative z-10 pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Cabecera Espacial */}
        <header className="text-center mb-24 relative w-full" style={{ transform: 'translateZ(60px)' }}>
          <h1 className="text-6xl md:text-[110px] font-black tracking-tight mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-[#e9d5ff] to-[#c084fc] drop-shadow-[0_0_40px_rgba(168,85,247,0.5)] py-2">
            SOLO PARA<br className="hidden md:block"/> ENTENDIDOS
          </h1>
          <p className="text-2xl md:text-[32px] font-medium tracking-wide text-[#e9d5ff]/80">
            Elige tu próxima dimensión.
          </p>
        </header>

        {/* Grid 3D Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Tarjeta 1: Surf (3D Glass) */}
          <a href="#surf" className="group md:col-span-8 glass-panel rounded-[40px] p-12 flex flex-col justify-between relative transition-all duration-500 glass-panel-hover no-underline overflow-hidden ring-1 ring-white/10" style={{ transformStyle: 'preserve-3d' }}>
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="z-10 relative" style={{ transform: 'translateZ(40px)' }}>
              <div className="mb-8 w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#a855f7]/50 to-[#d946ef]/20 border border-white/40 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform backdrop-blur-md">
                <Waves className="w-10 h-10 text-white drop-shadow-[0_0_10px_white]" strokeWidth={2} />
              </div>
              <h2 className="text-[44px] font-bold leading-tight mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Comunidad Surf.</h2>
              <p className="text-[20px] text-[#e9d5ff]/90 font-light max-w-md drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">Fluye en entornos espaciales de alta fidelidad. Encuentra las mejores olas de la red.</p>
              <div className="text-[#e9d5ff] font-medium text-[18px] mt-10 flex items-center group-hover:text-white transition-colors bg-white/10 w-fit px-6 py-3 rounded-full border border-white/20 backdrop-blur-md">
                Iniciar Simulación <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Objeto 3D - Orbe de Energía */}
            <div className="absolute right-10 bottom-10 w-64 h-64 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
               {/* Esfera de Núcleo */}
               <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3b0764] via-[#a855f7] to-white shadow-[inset_-30px_-30px_60px_rgba(0,0,0,0.5),0_30px_60px_rgba(0,0,0,0.5),0_0_80px_rgba(168,85,247,0.5)]" style={{ animation: 'var(--animate-floatSlow)' }}></div>
               {/* Anillos de Datos Orbitales */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[4px] border-t-transparent border-b-[#06b6d4]/50 border-x-[#d946ef]/50 rounded-[50%]" style={{ transform: 'rotateX(75deg) rotateY(15deg)', animation: 'var(--animate-orbit) 8s linear infinite' }}>
                  <div className="w-6 h-6 bg-white rounded-full shadow-[0_0_20px_white]" style={{ position: 'absolute', top: '10%', left: '10%' }}></div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] border-[2px] border-dashed border-[#a855f7]/40 rounded-[50%]" style={{ transform: 'rotateX(60deg) rotateY(-30deg)', animation: 'var(--animate-orbit) 12s linear infinite reverse' }}></div>
            </div>
          </a>

          {/* Tarjeta 2: Finanzas */}
          <a href="#finanzas" className="group md:col-span-4 glass-panel rounded-[40px] p-12 flex flex-col relative transition-all duration-500 glass-panel-hover no-underline overflow-hidden ring-1 ring-white/10" style={{ transformStyle: 'preserve-3d' }}>
             <div className="absolute inset-0 bg-gradient-to-bl from-[#06b6d4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
            <div className="z-10 relative" style={{ transform: 'translateZ(40px)' }}>
              <div className="mb-8 w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#06b6d4]/50 to-[#3b82f6]/20 border border-white/40 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform backdrop-blur-md">
                <Wallet className="w-10 h-10 text-white drop-shadow-[0_0_10px_white]" strokeWidth={2} />
              </div>
              <h2 className="text-[36px] font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Control<br/>Gastos.</h2>
              <p className="text-[18px] text-[#cffafe]/90 font-light mb-8 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">Gestión de criptoactivos y bases en la nueva red espacial.</p>
            </div>

             {/* Base de Datos Holográfica 3D */}
            <div className="absolute right-0 bottom-4 w-48 h-48 pointer-events-none flex flex-col items-center justify-end gap-2" style={{ transform: 'rotateX(30deg) rotateY(-20deg) translateZ(50px)', animation: 'var(--animate-floatSlow)' }}>
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="w-32 h-8 rounded-full border border-white/40 bg-gradient-to-r from-white/10 via-white/30 to-white/10 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center px-4">
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                       <div className="h-full bg-[#06b6d4] shadow-[0_0_10px_#06b6d4]" style={{ width: `${Math.random() * 60 + 30}%` }}></div>
                    </div>
                 </div>
               ))}
            </div>
          </a>

          {/* Tarjeta 3: IT */}
          <a href="#tech" className="group md:col-span-12 glass-panel rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between relative transition-all duration-500 glass-panel-hover no-underline overflow-hidden ring-1 ring-white/10" style={{ transformStyle: 'preserve-3d' }}>
            <div className="max-w-xl z-20 relative" style={{ transform: 'translateZ(50px)' }}>
              <div className="mb-8 w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#d946ef]/50 to-[#f43f5e]/20 border border-white/40 flex items-center justify-center shadow-[0_0_40px_rgba(217,70,239,0.5)] group-hover:scale-110 transition-transform backdrop-blur-md">
                <Cpu className="w-10 h-10 text-white drop-shadow-[0_0_10px_white]" strokeWidth={2} />
              </div>
              <h2 className="text-[50px] font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Servicios IT 3.0</h2>
              <p className="text-[22px] text-[#fbcfe8]/90 font-light mb-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">Arquitectura digital inmersiva. Renderizado en tiempo real.</p>
              
              <button className="bg-white text-black font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_white] shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                Desplegar Servidor
              </button>
            </div>

            {/* Elemento 3D abstracto: Cubo Tesseract Isométrico */}
            <div className="mt-16 md:mt-0 relative w-64 h-64 pointer-events-none z-10" style={{ transform: 'translateZ(60px) rotateX(15deg) rotateY(-20deg)' }}>
              <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d', animation: 'var(--animate-floatSlow) 8s ease-in-out infinite' }}>
                {/* Lado superior */}
                <div className="absolute w-[160px] h-[160px] bg-white/10 border-2 border-white/50 backdrop-blur-lg flex items-center justify-center overflow-hidden" style={{ transform: 'rotateX(90deg) translateZ(80px)' }}>
                  <div className="w-[120px] h-[120px] border border-white/30 rounded-full animate-ping opacity-50"></div>
                </div>
                {/* Lado Frontal */}
                <div className="absolute w-[160px] h-[160px] bg-gradient-to-br from-[#d946ef]/30 to-[#4f46e5]/30 border-2 border-white/50 backdrop-blur-lg flex items-center justify-center shadow-[0_0_50px_rgba(217,70,239,0.3)]" style={{ transform: 'translateZ(80px)' }}>
                   <div className="w-16 h-16 border-t-4 border-r-4 border-white rounded-tr-3xl animate-pulse"></div>
                   <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-[#06b6d4] shadow-[0_0_10px_#06b6d4]"></div>
                </div>
                {/* Lado derecho */}
                <div className="absolute w-[160px] h-[160px] bg-gradient-to-bl from-[#a855f7]/30 to-[#ec4899]/30 border-2 border-white/50 backdrop-blur-lg flex flex-col justify-between p-4" style={{ transform: 'rotateY(90deg) translateZ(80px)' }}>
                   <div className="w-full h-2 bg-white/30 rounded-full"><div className="w-2/3 h-full bg-white rounded-full"></div></div>
                   <div className="w-full h-2 bg-white/30 rounded-full"><div className="w-1/3 h-full bg-white rounded-full"></div></div>
                   <div className="w-full h-2 bg-white/30 rounded-full"><div className="w-1/2 h-full bg-white rounded-full"></div></div>
                </div>
              </div>
            </div>
            
          </a>
        </div>
      </main>
    </div>
  );
}
