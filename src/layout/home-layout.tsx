"use client";
import { useState } from "react";
import { motion } from "motion/react";
import ParticlesComponents from "@/components/animation/particles";
import TypingEffect from "@/components/typingEffects/turning_ideas_into_reality";
import ContactBtn from "@/components/buttons/contact_button";

const HomeLayout: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div id="home" className="relative flex justify-center items-center min-h-screen bg-[#080808] overflow-hidden">
      {/* <div className="absolute inset-x-0 z-10 top-0 h-7 bg-gradient-to-b from-white/20 to-transparent"></div> */}
      <div className="absolute inset-x-0 z-10 bottom-0 h-7 bg-gradient-to-t from-white/20 to-transparent"></div>
      {showButton && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }} className="absolute inset-0 z-0">
          <ParticlesComponents />
        </motion.div>
      )}
      <div className="relative z-10 flex flex-col items-center gap-y-8 md:gap-y-10 lg:gap-y-12">
        <div className="text-center w-80 md:w-full">
          <TypingEffect onComplete={() => setShowButton(true)} />
        </div>
        {showButton && (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
            }}
          >
            <ContactBtn />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HomeLayout;
