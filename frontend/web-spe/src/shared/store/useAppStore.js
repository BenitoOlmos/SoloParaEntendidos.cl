import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAppStore = create(
  persist(
    (set) => ({
      // UI Persistente
      theme: 'apple', // Por defecto
      setTheme: (newTheme) => set({ theme: newTheme }),

      // Sesión (ejemplo)
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'spe-app-storage', // key en localStorage
    }
  )
);
