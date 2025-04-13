import { Globe, Cuboid, AppWindow, Fingerprint } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-lg mx-auto">
      {[
        { icon: <Globe size={45} />, label: "All" },
        { icon: <Cuboid size={45} />, label: "Web3.0" },
        { icon: <AppWindow size={45} />, label: "Web Apps" },
        { icon: <Fingerprint size={45} />, label: "Smart Contract Audits" },
      ].map((item, index) => (
        <button
          key={index}
          className="flex flex-col items-center justify-center w-full h-44 border-4 border-red-600 rounded-xl text-red-600 hover:shadow-lg hover:scale-105 transition hover:animate-pulse shadow-red-600 cursor-pointer ease-in-out duration-300 relative overflow-hidden"
        >
          <div className="text-red-600 hover:text-orange-400 transition ease-in-out duration-300">{item.icon}</div>
          <div className="mt-2 font-bold text-center text-[1.172rem] px-2 z-10 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-300 bg-clip-text text-transparent transition duration-300 transform hover:-translate-y-1 hover:brightness-125">
            {item.label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Projects;
