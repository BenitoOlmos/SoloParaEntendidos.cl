import { useState, useCallback } from 'react';
import { userListSchema } from './schemas';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Reemplazar con llamada real a tu API en Vite
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      
      const data = await response.json();
      
      // Validación estricta con Zod
      const parsedData = userListSchema.parse(data);
      setUsers(parsedData);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { users, isLoading, error, fetchUsers };
};
