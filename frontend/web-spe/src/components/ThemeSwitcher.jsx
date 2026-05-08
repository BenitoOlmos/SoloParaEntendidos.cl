import { Monitor, Apple, Box, Disc } from 'lucide-react';

export default function ThemeSwitcher({ currentTheme, onThemeChange }) {
  const themes = [
    { id: 'apple', icon: <Apple size={20} />, label: 'Apple Premium' },
    { id: 'retro', icon: <Disc size={20} />, label: 'Retro Y2K / Synth' },
    { id: 'neobrutalism', icon: <Box size={20} />, label: 'Neobrutalism' },
    { id: 'spline', icon: <Monitor size={20} />, label: '3D Spline' }
  ];

  return (
    <div className="fixed top-4 left-4 z-50 flex gap-2 bg-black/50 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-xl">
      {themes.map((t) => {
        const isActive = currentTheme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onThemeChange(t.id)}
            title={t.label}
            className={`p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-110' 
                : 'text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            {t.icon}
          </button>
        );
      })}
    </div>
  );
}
