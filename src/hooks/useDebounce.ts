import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number = 300) => {
  const [debouncedTitle, setDebouncedTitle] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedTitle(value), delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedTitle;
};
