import { motion } from "motion/react";
import { Github, ArrowDown, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionMatrixRain } from "./SectionMatrixRain";

export function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
    "Full-Stack Developer",
    "Systems & Backend Engineer",
    "AI & Tech Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <SectionMatrixRain opacity={0.4} speed={1.2} density="medium" />
      
      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{ fontFamily: "Orbitron, sans-serif" }}
            animate={{
              textShadow: [
                "0 0 20px #00ff66",
                "0 0 40px #00ff66",
                "0 0 20px #00ff66",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            I Build & Create
            <br />
            <span className="text-[#00ff66]">Innovative</span>
            <br />
            Solutions
          </motion.h1>

          <motion.div
            className="h-8 md:h-10 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.p
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-2xl text-[#00eaff]"
            >
              {phrases[currentPhrase]}
            </motion.p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Developer | Problem Solver | Building the future with code and creativity
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 border-2 border-[#00ff66] text-[#00ff66] font-bold rounded-lg hover:bg-[#00ff66]/10 flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00ff66" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>

            <motion.a
              href="https://github.com/ratul1918"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#00ff66] text-[#00ff66] font-bold rounded-lg hover:bg-[#00ff66]/10 flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00ff66" }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              GitHub
            </motion.a>

            <motion.button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border-2 border-[#00eaff] text-[#00eaff] font-bold rounded-lg hover:bg-[#00eaff]/10 flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00eaff" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Contact
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-[#00ff66]" size={32} />
        </motion.div>
      </div>
    </section>
  );
}