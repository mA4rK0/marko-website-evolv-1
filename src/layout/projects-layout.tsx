"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import ProjectsTextEffect from "@/components/typingEffects/project_section_des";
import fireBlow from "../../public/fireBlow.json";
import Projects from "@/ui/grid_projects";

const ProjectsLayout: React.FC = () => {
  const [hideElement, setHideElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHideElement(scrollY > 667);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="projects" className="relative w-full min-h-screen py-20 bg-[#080808]">
      <div
        className={`absolute inset-x-0 top-0 z-10 h-7 bg-gradient-to-b from-red-600/20 to-transparent
        transition-opacity duration-500 ease-in-out ${hideElement ? "opacity-0" : "opacity-100"}`}
      ></div>
      <div
        className={`absolute left-0 top-0 h-full w-7 bg-gradient-to-r from-red-600/20 to-transparent
        transition-opacity duration-500 ease-in-out ${!hideElement ? "opacity-0" : "opacity-100"}`}
      ></div>
      <div
        className={`absolute right-0 top-0 h-full w-7 bg-gradient-to-l from-red-600/20 to-transparent
        transition-opacity duration-500 ease-in-out ${!hideElement ? "opacity-0" : "opacity-100"}`}
      ></div>
      {hideElement && (
        <>
          <div className="relative">
            <div className="flex justify-center">
              <h1 className="text-red-600 text-4xl md:text-5xl font-semibold hover:text-orange-500 drop-shadow-[0_0_6px_rgba(255,80,80,0.5)] animate-pulse">Projects</h1>
            </div>
            <div>
              <Lottie animationData={fireBlow} loop={false} className="absolute bottom-5 left-1/2 -translate-x-1/2 w-60 md:w-[25rem]" />
            </div>
            <div className="flex justify-center mt-7 w-[15rem] mx-auto md:mx-0 md:w-full text-center text-lg md:text-xl">
              <ProjectsTextEffect />
            </div>
          </div>
        </>
      )}
      <div className="flex justify-center mt-12">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsLayout;
