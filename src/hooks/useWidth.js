import { useState, useEffect } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(null);

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
