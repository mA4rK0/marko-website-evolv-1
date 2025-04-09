"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/navbar";
import { Origami } from "lucide-react";
import MobileNavbar from "@/components/mobile_navbar";

export default function NavbarLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowSize.width <= 440;

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -50, transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section>
      <header className={`flex items-center fixed top-0 w-full h-[3.688rem] z-20 transition-all ease-in-out duration-300 ${scrolled ? "bg-black/30 backdrop-blur-md shadow-sm shadow-white" : "bg-transparent"}`}>
        <section className="flex items-center w-full justify-between px-4 lg:px-[7rem]">
          <div className="flex gap-x-2">
            <Origami className="text-violet-500" />
            <p className="text-white font-bold">
              <span className="text-violet-500">M</span>rC
            </p>
          </div>
          {isMobile ? <MobileNavbar state={() => setIsOpen(!isOpen)} isBorder={isOpen} /> : <Navbar />}
        </section>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col py-5 fixed right-2 top-16 w-full max-w-[250px] z-20 text-white bg-[#383838]/50 backdrop-blur-md shadow-lg shadow-black rounded-lg transition ease-in-out duration-300"
          >
            {["Home", "Projects", "About", "Skills", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                variants={linkVariants}
                custom={i}
                className="hover:text-violet-500 hover:bg-[#4a4a4a] rounded-lg pl-2 py-2 mx-8 active:text-white font-semibold transition ease-in-out duration-300"
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </section>
  );
}
