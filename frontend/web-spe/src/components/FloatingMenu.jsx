import { useTheme } from '../context/ThemeContext';
import { Apple, Disc, Box, Monitor } from 'lucide-react';

export default function FloatingMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex gap-3 bg-black/80 backdrop-blur-xl p-2.5 rounded-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all">
      <button 
        onClick={() => setTheme('apple')}
        title="Modo Apple Premium" 
        className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
          theme === 'apple' 
            ? 'bg-white text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.6)]' 
            : 'text-white/50 hover:bg-white/20 hover:text-white'
        }`}
      >
        <Apple size={22} />
      </button>
      <button 
        onClick={() => setTheme('retro')}
        title="Modo Retro Y2K / Synthwave" 
        className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
          theme === 'retro' 
            ? 'bg-[#ff00ff]/20 text-[#ff00ff] border border-[#ff00ff] scale-110 shadow-[0_0_20px_rgba(255,0,255,0.6)]' 
            : 'text-white/50 hover:bg-white/20 hover:text-white'
        }`}
      >
        <Disc size={22} />
      </button>
      <div className="w-[1px] h-8 bg-white/20 my-auto mx-1"></div>
      <button 
        onClick={() => setTheme('neobrutalism')}
        title="Modo Neobrutalismo" 
        className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
          theme === 'neobrutalism' 
            ? 'bg-[#ffeb3b] text-black border-2 border-black scale-110 shadow-[4px_4px_0px_rgba(0,0,0,1)]' 
            : 'text-white/50 hover:bg-white/20 hover:text-white'
        }`}
      >
        <Box size={22} />
      </button>
      <button 
        onClick={() => setTheme('threed')}
        title="Modo 3D Espacial" 
        className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
          theme === 'threed' 
            ? 'bg-gradient-to-tr from-indigo-500 to-purple-500 text-white scale-110 shadow-[0_0_20px_rgba(139,92,246,0.6)] border border-white/30' 
            : 'text-white/50 hover:bg-white/20 hover:text-white'
        }`}
      >
        <Monitor size={22} />
      </button>
    </div>
  );
}
