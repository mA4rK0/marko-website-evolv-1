"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingEffect({ onComplete }: { onComplete: () => void }) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Turning Ideas into Reality"],
      typeSpeed: 50,
      showCursor: false,
      loop: false,
      onComplete: () => {
        onComplete();
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <h1 ref={textRef} className="text-white text-5xl md:text-6xl font-semibold"></h1>;
}
