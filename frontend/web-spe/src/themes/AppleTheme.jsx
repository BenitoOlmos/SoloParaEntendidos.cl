import { useEffect, useState } from 'react';
import { Waves, Wallet, Cpu, ChevronRight, Apple, Sparkles } from 'lucide-react';

export default function AppleTheme() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1d1d1f] font-sans selection:bg-[#0071e3] selection:text-white overflow-x-hidden pb-32">
      
      {/* Barra de Navegación Estilo macOS */}
      <nav className="fixed top-0 w-full h-[48px] bg-[rgba(255,255,255,0.7)] backdrop-blur-xl border-b border-black/5 z-50 flex items-center justify-center px-4 transition-all">
        <div className="max-w-7xl w-full flex justify-between items-center px-2">
          <Apple className="w-5 h-5 text-[#1d1d1f]/90 hover:text-black transition-colors cursor-pointer" />
          <div className="hidden md:flex space-x-10 text-[13px] font-medium tracking-wide text-[#1d1d1f]/80">
            <a href="#surf" className="hover:text-black transition-colors">Comunidad</a>
            <a href="#finanzas" className="hover:text-black transition-colors">Finanzas</a>
            <a href="#tech" className="hover:text-black transition-colors">Servicios IT</a>
            <a href="#soporte" className="hover:text-black transition-colors">Soporte</a>
          </div>
          <div className="w-5 h-5"></div>
        </div>
      </nav>

      {/* Hero Premium */}
      <main className="pt-36 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <header className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-[96px] font-semibold tracking-tighter mb-4 leading-none text-[#1d1d1f]">Solo para Entendidos.</h1>
          <p className="text-2xl md:text-[32px] font-medium tracking-tight text-[#86868b] mt-4">Elige tu próxima ola. <br className="md:hidden" />Diseñado pensando en ti.</p>
        </header>

        {/* Bento Grid Estilo iPadOS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          
          {/* Tarjeta 1: Surf */}
          <a href="#surf" className={`group md:col-span-8 bg-white rounded-[40px] p-12 flex flex-col justify-between overflow-hidden relative transition-all duration-700 hover:scale-[1.01] shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] no-underline ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            <div className="absolute bottom-0 left-0 w-[200%] h-40 pointer-events-none" style={{ animation: 'appleWaveSlide 20s linear infinite' }}>
              <svg width="100%" height="100%" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0071e3" opacity="0.05"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fill="#0071e3" opacity="0.08"></path>
              </svg>
            </div>

            <div className="z-10 relative">
              <div className="mb-8 w-16 h-16 bg-[#F5F5F7] rounded-[22px] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-out shadow-sm border border-black/5">
                <Waves className="w-8 h-8 text-[#0071e3]" strokeWidth={2} />
              </div>
              <h2 className="text-[40px] md:text-[56px] font-semibold leading-tight tracking-tight text-[#1d1d1f] mb-4">Comunidad Surf. <br /><span className="text-[#86868b]">Tu mejor ola.</span></h2>
              <p className="text-[20px] leading-relaxed text-[#1d1d1f] font-normal mt-4 max-w-lg">Reportes meteorológicos precisos y la mejor red de surfistas en línea.</p>
              <div className="text-[#0071e3] text-[19px] font-medium flex items-center mt-8 group-hover:underline w-fit">Descubre más <ChevronRight className="w-5 h-5 ml-1 mt-[2px]" /></div>
            </div>

            {/* Surfista Geométrico Minimalista */}
            <div className="absolute right-0 bottom-0 md:right-10 md:bottom-10 pointer-events-none w-[250px] h-[200px] transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2">
              <div className="absolute inset-0" style={{ animation: 'appleFloat 6s ease-in-out infinite' }}>
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="absolute bottom-0 right-0">
                  <path d="M5 75 C 25 55, 65 45, 95 70" stroke="url(#blue-wave-apple)" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
                  <rect x="40" y="45" width="35" height="4" rx="2" transform="rotate(-15 40 45)" fill="#1d1d1f"/>
                  <circle cx="56" cy="35" r="5" fill="#0071e3"/>
                  <path d="M52 46 L45 60 M62 43 L56 57" stroke="#1d1d1f" strokeWidth="3" strokeLinecap="round"/>
                  <defs><linearGradient id="blue-wave-apple" x1="0" y1="0" x2="100" y2="0"><stop offset="0%" stopColor="#0071e3" stopOpacity="0.1"/><stop offset="60%" stopColor="#0071e3" stopOpacity="1"/><stop offset="100%" stopColor="#30b0ff" stopOpacity="0"/></linearGradient></defs>
                </svg>
              </div>
            </div>
          </a>

          {/* Tarjeta 2: Finanzas */}
          <a href="#finanzas" className={`group md:col-span-4 bg-white rounded-[40px] p-12 flex flex-col relative overflow-hidden transition-all duration-700 hover:scale-[1.02] shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] no-underline ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="absolute -right-10 -top-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl transition-all duration-700"></div>
            
            {/* Gráfico Minimalista Flotante */}
            <div className="absolute right-4 top-12 w-48 h-32 bg-[rgba(255,255,255,0.8)] backdrop-blur-2xl rounded-2xl border border-white/50 shadow-[0_15px_35px_rgba(0,0,0,0.08)] p-5 flex flex-col justify-between transform rotate-[-8deg] group-hover:rotate-[-4deg] group-hover:-translate-y-4 transition-all duration-700 ease-out z-0">
              <div className="flex justify-between items-center"><div className="w-12 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-[10px] text-emerald-700 font-bold">+12%</div><div className="w-6 h-6 rounded-full bg-emerald-500"></div></div>
              <div className="space-y-3"><div className="w-20 h-2 bg-gray-200 rounded-full"></div><div className="w-32 h-2 bg-gray-100 rounded-full"></div></div>
            </div>

            <div className="z-10 relative mt-36 md:mt-40 mb-8 w-16 h-16 bg-[#F5F5F7] rounded-[22px] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-out shadow-sm border border-black/5">
              <Wallet className="w-8 h-8 text-[#1d1d1f]" strokeWidth={2} />
            </div>
            <h2 className="z-10 relative text-[36px] font-semibold tracking-tight text-[#1d1d1f] mb-4 leading-tight">Control <br/>de Gastos.</h2>
            <p className="z-10 relative text-[19px] leading-relaxed text-[#86868b] font-normal mb-8">Administra tus ingresos fácilmente y mantén a flote tu salud financiera.</p>
            <div className="z-10 relative mt-auto"><div className="text-[#0071e3] text-[19px] font-medium flex items-center group-hover:underline w-fit">Ir a Finanzas <ChevronRight className="w-5 h-5 ml-1 mt-[2px]" /></div></div>
          </a>

          {/* Tarjeta 3: IT */}
          <a href="#tech" className={`group md:col-span-12 bg-black text-white rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden relative transition-all duration-700 hover:scale-[1.01] shadow-[0_30px_60px_rgba(0,0,0,0.2)] no-underline ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', animation: 'applePulseGlow 6s ease-in-out infinite' }}></div>
            <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-[#0071e3]/30 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="max-w-xl z-10 relative">
              <div className="mb-8 w-16 h-16 bg-white/10 rounded-[22px] flex items-center justify-center border border-white/20 backdrop-blur-md group-hover:scale-105 transition-transform duration-500 ease-out">
                <Cpu className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-[48px] md:text-[64px] font-semibold tracking-tight mb-4 leading-none flex items-center gap-4">Servicios IT. <Sparkles className="w-8 h-8 text-[#0071e3] animate-pulse" /></h2>
              <p className="text-[28px] md:text-[32px] font-medium text-white/50 mb-6 leading-tight">El motor de tu negocio.</p>
              <p className="text-[20px] leading-relaxed text-white/80 font-normal max-w-lg mb-10">Soluciones digitales de rendimiento extremo creadas para el ecosistema moderno.</p>
              
              <div className="bg-white text-black px-8 py-4 rounded-full text-[19px] font-semibold flex items-center w-fit transition-transform hover:scale-105 cursor-pointer shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                Comprar ahora
              </div>
            </div>

            <div className="mt-14 md:mt-0 flex-shrink-0 z-10 relative w-full md:w-[400px]">
               {/* Dashboard Simulator */}
               <div className="w-full h-56 bg-[#1D1D1F]/80 backdrop-blur-2xl rounded-[28px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-6 flex flex-col gap-5 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out">
                 <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0071e3] to-purple-500 shadow-inner"></div>
                       <div><div className="w-20 h-2 bg-white/40 rounded-full mb-2"></div><div className="w-12 h-2 bg-white/10 rounded-full"></div></div>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/30">System OK</div>
                 </div>
                 <div className="flex-1 border-b border-white/5 relative overflow-hidden rounded-lg mt-2">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,80 C 20,80 30,30 50,40 C 70,50 80,10 100,5" fill="none" stroke="#0071e3" strokeWidth="4" strokeLinecap="round" />
                      <path d="M0,80 C 20,80 30,30 50,40 C 70,50 80,10 100,5 L100,100 L0,100 Z" fill="url(#chart-fade)" opacity="0.4"/>
                    </svg>
                 </div>
               </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
