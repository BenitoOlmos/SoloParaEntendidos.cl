import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import FloatingMenu from './components/FloatingMenu';

import AppleTheme from './themes/AppleTheme';
import RetroTheme from './themes/RetroTheme';
import NeobrutalismTheme from './themes/NeobrutalismTheme';
import ThreeDTheme from './themes/ThreeDTheme';

// Wrapper for transition
function ThemeRenderer() {
  const { theme } = useTheme();
  
  // States for crossfade transition
  const [displayTheme, setDisplayTheme] = useState(theme);
  const [transitionClass, setTransitionClass] = useState('theme-enter-active');

  useEffect(() => {
    if (theme !== displayTheme) {
      setTransitionClass('theme-enter');
      const timeout = setTimeout(() => {
        setDisplayTheme(theme);
        setTransitionClass('theme-enter-active');
      }, 300); // 300ms fade transition matches CSS
      return () => clearTimeout(timeout);
    }
  }, [theme, displayTheme]);

  return (
    <div className={`theme-transition ${transitionClass}`}>
      {displayTheme === 'apple' && <AppleTheme />}
      {displayTheme === 'retro' && <RetroTheme />}
      {displayTheme === 'neobrutalism' && <NeobrutalismTheme />}
      {displayTheme === 'threed' && <ThreeDTheme />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      {/* El menú flotante es global y consume el contexto */}
      <FloatingMenu />
      
      {/* El renderizador maneja las transiciones de CSS */}
      <ThemeRenderer />
    </ThemeProvider>
  );
}

export default App;