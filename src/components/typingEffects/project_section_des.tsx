"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function ProjectsTextEffect() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Here are some of the projects that I have created."],
      typeSpeed: 50,
      showCursor: false,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <p ref={textRef} className="text-white"></p>;
}
