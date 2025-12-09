import { useEffect, RefObject } from 'react';

export const useInsertionEffect = (
  containers: RefObject<HTMLElement | null>[],
  intersecting: (title: string) => void
): void => {
  const callBack = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intersecting((entry.target as HTMLElement).title);
      } else {
        intersecting('noIntersecting');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, {
      root: null,
      rootMargin: '0px',
      threshold: 0.35,
    });
    containers.forEach((container) => {
      if (container.current) {
        observer.observe(container.current);
      }
    });

    return () => {
      containers.forEach((container) => {
        if (container.current) {
          observer.unobserve(container.current);
        }
      });
    };
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */
};
