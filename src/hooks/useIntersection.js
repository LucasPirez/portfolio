import { useEffect } from 'react';

export const useInsertionEffect = (containers, intersecting) => {
  const callBack = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intersecting(entry.target.title);
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
