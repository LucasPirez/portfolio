import { useRef, useState, useEffect } from "react";

export const useInsertionEffect = (options) => {
  const containerRef = useRef();

  const [visible, setVisible] = useState(false);
  const [animationStart, setAnimationStart] = useState(false);
  const [nameCurrent, setNameCurrent] = useState(null);

  const callBack = (entries) => {
    const [entry] = entries;

    setVisible(entry.isIntersecting);

    setNameCurrent(entry.target.title);
  };

  useEffect(() => {
    visible && setAnimationStart(true);

    const observer = new IntersectionObserver(callBack, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, visible]);

  return [containerRef, visible, animationStart, nameCurrent];
};
