import { Waves, Wallet, Cpu, Sparkles, ChevronRight } from 'lucide-react';

export default function NeobrutalismTheme() {
  return (
    <div className="min-h-screen bg-[#FFF0E5] text-black font-sans selection:bg-[#FF3366] selection:text-white overflow-x-hidden pb-32">
      {/* Cinta de Marquesina (Marquee) Superior */}
      <div className="w-full bg-[#FF3366] border-b-[6px] border-black overflow-hidden py-3 whitespace-nowrap flex z-50 relative">
        <div className="animate-[marquee_15s_linear_infinite] flex gap-10 text-black font-black uppercase text-xl tracking-widest">
          <span>NO APTO PARA NORMALES</span><span>★</span><span>SOLO ENTENDIDOS</span><span>★</span>
          <span>NO APTO PARA NORMALES</span><span>★</span><span>SOLO ENTENDIDOS</span><span>★</span>
          <span>NO APTO PARA NORMALES</span><span>★</span><span>SOLO ENTENDIDOS</span><span>★</span>
          <span>NO APTO PARA NORMALES</span><span>★</span><span>SOLO ENTENDIDOS</span><span>★</span>
        </div>
      </div>

      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Cabecera Neobrutalista - Más agresiva */}
        <header className="text-center mb-24 relative w-full flex flex-col items-center">
          <div className="bg-[#00E5FF] border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 rotate-[-3deg] mb-8 w-fit relative z-10 transition-transform hover:rotate-0">
            <h1 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-none m-0">
              SOLO <br className="md:hidden"/> ENTENDIDOS
            </h1>
          </div>
          <div className="bg-white border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] px-8 py-4 rotate-[2deg] w-fit">
            <p className="text-2xl md:text-4xl font-bold uppercase tracking-tight m-0">Elige tu próxima ola</p>
          </div>
        </header>

        {/* Grid Neobrutalista */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full z-20 relative">
          
          {/* Tarjeta 1: Surf (Rosa) */}
          <a href="#surf" className="group md:col-span-7 bg-[#FF90E8] rounded-none p-10 md:p-14 border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 active:shadow-none active:translate-y-[16px] active:translate-x-[16px] transition-all duration-200 no-underline relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-6 right-6 bg-white border-[4px] border-black rounded-full w-16 h-16 flex items-center justify-center text-4xl font-black group-hover:rotate-180 transition-transform duration-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
              *
            </div>
            
            {/* Patrón de puntos crudos */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(black 3px, transparent 3px)', backgroundSize: '24px 24px' }}></div>

            <div className="z-10 relative">
              <div className="mb-8 w-20 h-20 bg-white border-[6px] border-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-12 transition-transform">
                <Waves className="w-10 h-10 text-black" strokeWidth={3} />
              </div>
              <h2 className="text-[48px] md:text-[64px] font-black leading-[0.9] uppercase mb-6 bg-white inline-block px-4 py-2 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                COMUNIDAD<br/>SURF
              </h2>
              <p className="text-[20px] font-bold border-l-[6px] border-black pl-5 max-w-sm bg-white/90 py-3 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Reportes en vivo y las mejores playas.
              </p>
            </div>

            {/* Surfista Neobrutalista Literal */}
            <div className="absolute right-0 bottom-0 md:right-4 md:bottom-4 w-[200px] h-[200px] pointer-events-none z-10" style={{ animation: 'var(--animate-neoBounce)' }}>
               <svg width="100%" height="100%" viewBox="0 0 100 100">
                 {/* Ola cuadrada */}
                 <rect x="5" y="65" width="90" height="20" fill="#00E5FF" stroke="black" strokeWidth="6" />
                 <rect x="15" y="55" width="70" height="10" fill="#00E5FF" stroke="black" strokeWidth="6" />
                 {/* Tabla */}
                 <polygon points="10,65 30,45 80,45 90,65" fill="#FFEB3B" stroke="black" strokeWidth="5" />
                 {/* Cuerpo caja */}
                 <rect x="40" y="25" width="20" height="20" fill="white" stroke="black" strokeWidth="5" />
                 {/* Ojo asustado */}
                 <circle cx="53" cy="32" r="4" fill="black" />
                 {/* Piernas palo */}
                 <path d="M45,45 L40,60" stroke="black" strokeWidth="5" strokeLinecap="square" />
                 <path d="M55,45 L65,60" stroke="black" strokeWidth="5" strokeLinecap="square" />
               </svg>
            </div>
          </a>

          {/* Tarjeta 2: Finanzas (Verde Brutal) */}
          <a href="#finanzas" className="group md:col-span-5 bg-[#00D084] rounded-none p-10 md:p-14 border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 active:shadow-none active:translate-y-[16px] active:translate-x-[16px] transition-all duration-200 no-underline relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-[60%] opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, black, black 4px, transparent 4px, transparent 16px)' }}></div>
            
            <div className="z-10 relative">
              <div className="mb-8 w-20 h-20 bg-[#FFEB3B] border-[6px] border-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform">
                <Wallet className="w-10 h-10 text-black" strokeWidth={3} />
              </div>
              <h2 className="text-[40px] font-black leading-none uppercase mb-6 bg-black text-[#00D084] inline-block px-4 py-2 border-[4px] border-black shadow-[6px_6px_0px_0px_#FFEB3B]">
                CONTROL GASTOS
              </h2>
              <p className="text-[20px] font-bold bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] leading-snug">
                Mantén tus finanzas a flote de un golpe.
              </p>
            </div>

            {/* Gráfico Neobrutalista Absurdo */}
            <div className="mt-12 flex items-end gap-3 h-32 border-b-[6px] border-black pb-2 z-10 relative w-full px-2">
              <div className="flex-1 bg-white border-[6px] border-black h-[30%] shadow-[4px_4px_0_0_black] group-hover:h-[50%] transition-all duration-300"></div>
              <div className="flex-1 bg-[#FF90E8] border-[6px] border-black h-[60%] shadow-[4px_4px_0_0_black] group-hover:h-[80%] transition-all duration-300"></div>
              <div className="flex-1 bg-[#FF3366] border-[6px] border-black h-[100%] shadow-[4px_4px_0_0_black] group-hover:-translate-y-4 transition-all duration-300 relative"></div>
            </div>
          </a>

          {/* Tarjeta 3: IT (Cian Industrial) */}
          <a href="#tech" className="group md:col-span-12 bg-[#FFEB3B] rounded-none p-10 md:p-16 border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 active:shadow-none active:translate-y-[16px] active:translate-x-[16px] transition-all duration-200 no-underline relative flex flex-col md:flex-row items-center justify-between">
             <div className="absolute inset-0 border-[20px] border-[#00E5FF] opacity-100 pointer-events-none z-0"></div>

            <div className="w-full md:w-1/2 z-10 relative bg-white p-10 border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#FF3366] border-[6px] border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-45 transition-transform">
                <Cpu className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              <h2 className="text-[50px] font-black uppercase leading-[0.9] mb-6 mt-4 mix-blend-difference text-black">
                SERVICIOS IT
              </h2>
              <p className="text-[22px] font-bold uppercase mb-8 border-l-[6px] border-[#00E5FF] pl-4">El motor rudo de tu negocio.</p>
              
              <div className="bg-black text-[#FFEB3B] font-black text-xl uppercase px-10 py-5 border-[4px] border-black inline-flex items-center hover:bg-[#00E5FF] hover:text-black transition-colors">
                CONTRATAR AHORA <ChevronRight size={28} className="ml-2" strokeWidth={4} />
              </div>
            </div>
            
            <div className="mt-14 md:mt-0 z-10 w-full md:w-1/2 flex justify-end">
              {/* Ventana de Consola Extra Cruda */}
              <div className="w-full md:w-[400px] bg-black border-[6px] border-black shadow-[12px_12px_0px_0px_#FF3366]">
                <div className="bg-white border-b-[6px] border-black p-3 flex gap-3 items-center">
                  <div className="w-6 h-6 bg-[#FF3366] border-[4px] border-black rounded-full"></div>
                  <div className="w-6 h-6 bg-[#FFEB3B] border-[4px] border-black rounded-full"></div>
                  <div className="w-6 h-6 bg-[#00D084] border-[4px] border-black rounded-full"></div>
                  <span className="font-black uppercase ml-auto mr-2">SYS.EXE</span>
                </div>
                <div className="p-6 font-mono text-[#00E5FF] font-bold text-lg md:text-xl leading-relaxed">
                  <p>&gt; RUN protocol.sh</p>
                  <p>&gt; INJECTING CODE...</p>
                  <p className="text-[#FFEB3B]">&gt; WARNING: TOO FAST</p>
                  <p className="text-[#00D084]">&gt; SUCCESS: 100%</p>
                  <p className="animate-pulse bg-white text-black inline-block px-2 mt-2">_</p>
                </div>
              </div>
            </div>
          </a>

        </div>
      </main>
    </div>
  );
}
