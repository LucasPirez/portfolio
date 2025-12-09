import { useState, useEffect } from 'react';

export default function useWidth(): { width: number } {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const event = (): void => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', event);
    return () => {
      window.removeEventListener('resize', event);
    };
  }, []);

  return {
    width,
  };
}
