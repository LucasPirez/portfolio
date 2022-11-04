import { useState, useEffect } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const event = window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", event);
    };
  }, []);

  return {
    width,
  };
}
