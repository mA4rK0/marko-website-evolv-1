import HomeLayout from "@/layout/home-layout";
import ProjectsLayout from "@/layout/projects-layout";

export default function Home() {
  return (
    <div className="relative">
      <HomeLayout />
      <ProjectsLayout />
    </div>
  );
}
