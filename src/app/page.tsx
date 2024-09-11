"use client";

import { Brain } from "threejs-brain-animation";
import "threejs-brain-animation/dist/main.css";

export default function Example() {
  const width = 1000;
  const height = 500;
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Brain width={width} height={height} />
    </div>
  );
}

