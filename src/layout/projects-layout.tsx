"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import ProjectsTextEffect from "@/components/typingEffects/project_section_des";
import fireBlow from "../../public/fireBlow.json";
import Projects from "@/ui/grid_projects";

const ProjectsLayout: React.FC = () => {
  const [hideElement, setHideElement] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHideElement(scrollY > 667);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (hideElement) {
      timeout = setTimeout(() => {
        setShowTitle(true);
      }, 900);
    } else {
      setShowTitle(false);
    }

    return () => clearTimeout(timeout);
  }, [hideElement]);

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
            <div className={`flex justify-center transition-opacity duration-700 ${showTitle ? "opacity-100" : "opacity-0"}`}>
              <h1 className="text-red-600 text-4xl md:text-5xl font-semibold drop-shadow-[0_0_6px_rgba(255,80,80,0.5)] animate-pulse">Projects</h1>
            </div>
            <div className="flex justify-center mt-7 w-[18rem] mx-auto md:mx-0 md:w-full text-center text-[1.406rem] md:text-3xl">
              <ProjectsTextEffect />
            </div>
            <div>
              <Lottie animationData={fireBlow} loop={false} className="absolute md:top-20 left-1/2 -translate-x-1/2 w-[30rem] md:w-[29rem]" />
            </div>
          </div>
        </>
      )}
      {hideElement && (
        <div className={`flex justify-center mt-12 transition-opacity duration-700 ${showTitle ? "opacity-100" : "opacity-0"}`}>
          <Projects />
        </div>
      )}
    </div>
  );
};

export default ProjectsLayout;
