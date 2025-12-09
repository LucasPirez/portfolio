import { useRef, useEffect, RefObject } from 'react';

export default function useClick(
  callback: () => void
): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const event = (e: MouseEvent): void => {
      e.stopPropagation();
      e.preventDefault();
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener('click', event);

    return () => document.removeEventListener('click', event);
  }, [ref, callback]);

  return ref;
}
