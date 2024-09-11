"use client";

import { useEffect, useState } from "react";
import { Brain } from "threejs-brain-animation";
import "threejs-brain-animation/dist/main.css";

export default function Example() {
  const [dimensions, setDimensions] = useState({ width: 600, height: 500 });

  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth * 0.9, 800);
      const height = (width / 16) * 9;
      setDimensions({ width, height });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Brain width={dimensions.width} height={dimensions.height} />
    </div>
  );
}

