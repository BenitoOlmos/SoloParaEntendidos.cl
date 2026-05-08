import React, { useEffect, useState } from 'react';
import { Waves, Wallet, Cpu, ChevronRight, Apple, Sparkles } from 'lucide-react';

export default function AppleLayout() {
  const [isVisible, setIsVisible] = useState(false);

  // Efecto de entrada suave al cargar (muy al estilo Apple)
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans selection:bg-[#0071e3] selection:text-white overflow-x-hidden">
      
      {/* Estilos para animaciones premium fluidas */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes waveSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      {/* Barra de Navegación Minimalista */}
      <nav className="fixed top-0 w-full h-[44px] bg-[rgba(255,255,255,0.8)] backdrop-blur-md border-b border-[#e5e5ea] z-50 flex items-center justify-center px-4 transition-all">
        <div className="max-w-6xl w-full flex justify-between items-center">
          <Apple className="w-4 h-4 text-[#1d1d1f]/80 hover:text-black transition-colors cursor-pointer" />
          <div className="hidden md:flex space-x-8 text-xs font-normal tracking-wide text-[#1d1d1f]/80">
            <a href="#surf" className="hover:text-black transition-colors">Comunidad Surf</a>
            <a href="#finanzas" className="hover:text-black transition-colors">Finanzas</a>
            <a href="#tech" className="hover:text-black transition-colors">Servicios IT</a>
            <a href="#soporte" className="hover:text-black transition-colors">Soporte</a>
          </div>
          <div className="w-4 h-4"></div> {/* Spacer for centering */}
        </div>
      </nav>

      {/* Sección Hero */}
      <main className="pt-32 pb-16 px-6 max-w-6xl mx-auto flex flex-col items-center">
        
        <header 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-[80px] font-bold tracking-tighter mb-4 leading-tight text-[#1d1d1f]">
            Solo para Entendidos.
          </h1>
          <p className="text-xl md:text-[28px] font-medium tracking-tight text-[#86868b] mt-2">
            Elige tu próxima ola. <br className="md:hidden" />Diseñado pensando en ti.
          </p>
        </header>

        {/* Apple Store Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          
          {/* Tarjeta 1: Comunidad Surf (Grande - 8 columnas) */}
          <a 
            href="#surf" 
            className={`group md:col-span-8 bg-[#f5f5f7] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden relative transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] no-underline ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Animación de Olas Sutiles en el fondo */}
            <div className="absolute bottom-0 left-0 w-[200%] h-32 opacity-40 pointer-events-none" style={{ animation: 'waveSlide 20s linear infinite' }}>
              <svg width="100%" height="100%" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#e5e5ea" opacity="0.5"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fill="#d2d2d7" opacity="0.3"></path>
              </svg>
            </div>

            <div className="z-10 relative">
              <div className="mb-6 w-14 h-14 bg-white rounded-[18px] shadow-sm flex items-center justify-center border border-white/60 group-hover:scale-110 transition-transform duration-500 ease-out">
                <Waves className="w-7 h-7 text-[#0071e3]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] mb-3">
                Comunidad Surf. <br />
                <span className="text-[#86868b]">Tu mejor ola te espera.</span>
              </h2>
              <p className="text-[17px] leading-relaxed text-[#1d1d1f] font-normal mt-4 max-w-md">
                Encuentra las mejores playas, reportes de olas y todo para el surfista.
              </p>
              <div className="text-[#0071e3] text-[17px] font-normal flex items-center mt-6 group-hover:underline w-fit">
                Descubre más <ChevronRight className="w-4 h-4 ml-1 mt-[2px]" />
              </div>
            </div>

            {/* 2 Surfistas Abstractos (Diseño Geométrico Premium) */}
            <div className="absolute right-[-20px] bottom-0 md:right-10 md:bottom-10 pointer-events-none w-[220px] h-[180px] transition-transform duration-700 group-hover:scale-105">
              
              {/* Surfista 2 (Fondo - Naranja/Plateado) */}
              <div className="absolute inset-0" style={{ animation: 'float 5.5s ease-in-out infinite 1s' }}>
                <svg width="140" height="140" viewBox="0 0 100 100" fill="none" className="absolute bottom-10 right-16 opacity-70">
                  <path d="M10 70 C 30 50, 60 45, 85 60" stroke="#ff9500" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
                  <rect x="42" y="44" width="22" height="6" rx="3" transform="rotate(-12 42 44)" fill="#86868b"/>
                  <circle cx="51" cy="36" r="4.5" fill="#ff9500"/>
                  <path d="M48 45 L45 52 M54 42 L51 49" stroke="#86868b" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Surfista 1 (Frente - Azul) */}
              <div className="absolute inset-0" style={{ animation: 'float 4.5s ease-in-out infinite' }}>
                <svg width="180" height="180" viewBox="0 0 100 100" fill="none" className="absolute bottom-0 right-0">
                  <path d="M5 75 C 25 55, 65 45, 95 70" stroke="url(#blue-wave)" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
                  <rect x="45" y="50" width="28" height="7" rx="3.5" transform="rotate(-18 45 50)" fill="#1d1d1f"/>
                  <circle cx="58" cy="40" r="6" fill="#0071e3"/>
                  <path d="M54 51 L49 61 M63 48 L58 58" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="blue-wave" x1="0" y1="0" x2="100" y2="0">
                      <stop offset="0%" stopColor="#0071e3" stopOpacity="0.1"/>
                      <stop offset="60%" stopColor="#0071e3" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#30b0ff" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </a>

          {/* Tarjeta 2: Control de Gastos (Pequeña - 4 columnas) */}
          <a 
            href="#finanzas" 
            className={`group md:col-span-4 bg-[#f5f5f7] rounded-[32px] p-10 flex flex-col relative overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] no-underline ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Animaciones Plataforma Finanzas: Gráfico y Tarjeta */}
            <div className="absolute -right-8 -top-8 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl transition-all duration-700"></div>

            {/* Tarjeta Glassmorfismo Estilo Apple Card */}
            <div className="absolute -right-6 top-8 w-44 h-28 bg-white/70 backdrop-blur-xl rounded-xl border border-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] p-4 flex flex-col justify-between transform rotate-[-12deg] group-hover:rotate-[-5deg] group-hover:-translate-y-3 transition-all duration-700 ease-out z-0">
              <div className="flex justify-between items-start">
                <div className="w-8 h-5 bg-[#1d1d1f]/10 rounded flex items-center justify-center">
                   <div className="w-4 h-2.5 border border-[#1d1d1f]/20 rounded-[2px]"></div>
                </div>
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-[#0071e3]/80 mix-blend-multiply"></div>
                  <div className="w-5 h-5 rounded-full bg-emerald-400/80 mix-blend-multiply"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-2 bg-[#1d1d1f]/10 rounded-full"></div>
                <div className="w-24 h-2 bg-[#1d1d1f]/20 rounded-full"></div>
              </div>
            </div>

            {/* Widget de Gráfico de Barras (Plataforma Ventas) */}
            <div className="absolute right-12 bottom-20 w-32 h-28 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-lg p-3 flex items-end gap-1.5 transform rotate-[8deg] group-hover:rotate-[12deg] group-hover:-translate-y-1 transition-all duration-700 delay-100 z-10">
              <div className="w-full bg-emerald-100 rounded-t h-[30%]"></div>
              <div className="w-full bg-emerald-200 rounded-t h-[55%]"></div>
              <div className="w-full bg-emerald-400 rounded-t h-[85%] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-600 rounded-full"></div>
              </div>
              <div className="w-full bg-emerald-100 rounded-t h-[45%]"></div>
            </div>

            <div className="z-10 relative mt-32 md:mt-24 mb-6 w-14 h-14 bg-white rounded-[18px] shadow-sm flex items-center justify-center border border-white/60 group-hover:scale-110 transition-transform duration-500 ease-out">
              <Wallet className="w-7 h-7 text-[#1d1d1f]" strokeWidth={1.5} />
            </div>
            <h2 className="z-10 relative text-[28px] font-semibold tracking-tight text-[#1d1d1f] mb-3 leading-tight">
              Control de Gastos.
            </h2>
            <p className="z-10 relative text-[17px] leading-relaxed text-[#86868b] font-normal mb-8">
              Mantén tus finanzas a flote. Administra tus ingresos fácilmente.
            </p>
            <div className="z-10 relative mt-auto">
               <div className="text-[#0071e3] text-[17px] font-normal flex items-center group-hover:underline w-fit">
                Ir a Finanzas <ChevronRight className="w-4 h-4 ml-1 mt-[2px]" />
              </div>
            </div>
          </a>

          {/* Tarjeta 3: Servicios IT (Ancha - 12 columnas) */}
          <a 
            href="#tech" 
            className={`group md:col-span-12 bg-[#1d1d1f] text-white rounded-[32px] p-10 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden relative transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] no-underline ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Animación Tecnológica de fondo */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', animation: 'pulseGlow 6s ease-in-out infinite' }}></div>
            <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-[#0071e3]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="max-w-xl z-10 relative">
              <div className="mb-6 w-14 h-14 bg-white/10 rounded-[18px] flex items-center justify-center border border-white/20 backdrop-blur-md group-hover:scale-110 transition-transform duration-500 ease-out">
                <Cpu className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight mb-2 leading-tight flex items-center gap-3">
                Servicios IT. <Sparkles className="w-6 h-6 text-[#0071e3] animate-pulse" />
              </h2>
              <p className="text-[24px] md:text-[28px] font-semibold text-white/50 mb-4 leading-tight">
                El motor de tu negocio.
              </p>
              <p className="text-[17px] leading-relaxed text-white/70 font-normal">
                Venta de servicios tecnológicos y soluciones digitales de alto rendimiento.
              </p>
              
              <div className="mt-8 inline-block">
                <div className="bg-white text-[#1d1d1f] px-6 py-3 rounded-full text-[17px] font-medium flex items-center transition-transform hover:scale-105 cursor-pointer">
                  Comprar ahora
                </div>
              </div>
            </div>
            
            {/* Mockup Interfaz de Plataforma de Ventas / Analytics */}
            <div className="mt-12 md:mt-0 flex-shrink-0 z-10 relative w-full md:w-[340px]">
               <div className="w-full h-48 bg-[#2d2d2f]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 flex flex-col gap-4 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-700 ease-out">
                 {/* Header Mockup */}
                 <div className="flex justify-between items-center">
                   <div className="flex gap-2 items-center">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0071e3] to-purple-500"></div>
                     <div>
                       <div className="w-16 h-2.5 bg-white/30 rounded-full mb-1"></div>
                       <div className="w-10 h-2 bg-white/10 rounded-full"></div>
                     </div>
                   </div>
                   <div className="w-16 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold border border-emerald-500/30">
                     +24.5%
                   </div>
                 </div>
                 
                 {/* Gráfico de Línea Suave (Sales Line Chart) */}
                 <div className="flex-1 border-b border-white/5 relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,80 C 20,80 30,50 50,60 C 70,70 80,20 100,10" fill="none" stroke="#0071e3" strokeWidth="3" strokeLinecap="round" />
                      <path d="M0,80 C 20,80 30,50 50,60 C 70,70 80,20 100,10 L100,100 L0,100 Z" fill="url(#chart-fade)" opacity="0.3"/>
                      <defs>
                        <linearGradient id="chart-fade" x1="0" y1="0" x2="0" y2="100">
                          <stop offset="0%" stopColor="#0071e3" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#0071e3" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                 </div>
                 
                 {/* Footer de métricas */}
                 <div className="flex gap-3 h-8">
                   <div className="flex-1 bg-white/5 rounded-lg border border-white/5 flex items-center px-2">
                      <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
                   </div>
                   <div className="flex-1 bg-white/5 rounded-lg border border-white/5 flex items-center px-2">
                      <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                   </div>
                 </div>
               </div>
            </div>
          </a>

        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="border-t border-[#e5e5ea] bg-[#f5f5f7] py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-[#86868b] text-xs flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2024. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Política de privacidad</a>
            <span className="border-l border-[#d2d2d7]"></span>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Términos de uso</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
