"use client";

import HomeLayout from "@/layout/home-layout";
import dynamic from "next/dynamic";

const ProjectsLayout = dynamic(() => import("@/layout/projects-layout"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative">
      <HomeLayout />
      <ProjectsLayout />
    </div>
  );
}
