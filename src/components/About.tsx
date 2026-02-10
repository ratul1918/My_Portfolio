import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Code2, Cpu, Rocket, BookOpen, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { SectionMatrixRain } from "./SectionMatrixRain";
import profileImage from "../assets/d20210aa9445e5e607e401fd25046fe77293a792.png";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { label: "Projects Built", value: "15+", icon: Rocket },
    { label: "Tech Stack Count", value: "20+", icon: Code2 },
    { label: "GitHub Repositories", value: "30+", icon: Cpu },
    { label: "Active Learning Years", value: "3+", icon: BookOpen },
  ];

  return (
    <section id="about" className="relative py-32 px-6 z-10 overflow-hidden">
      <SectionMatrixRain opacity={0.25} speed={0.8} density="low" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-4 text-[#00ff66]"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#00ff66] to-[#00eaff] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
            style={{ y: scrollY * 0.3 }}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-[#00ff66] via-[#00eaff] to-[#7c3aed] blur-xl rounded-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border-4 border-[#00ff66]/50 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Rafiur Rahman"
                  className="w-full h-full object-cover"
                />
                {/* Right side fade to background */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Rafiur Rahman
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              I'm a Computer Science & Engineering student with a passion for building 
              scalable SaaS platforms and intelligent systems. My approach combines 
              systems thinking with modern engineering practices to create software 
              that solves real-world problems.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              From full-stack web applications to mobile platforms, I focus on 
              architecture, backend logic, and creating seamless user experiences. 
              With a research-oriented mindset, I'm constantly exploring AI, 
              machine learning, and the future of intelligent software systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#00ff66]/10 border border-[#00ff66]/30 rounded-lg text-[#00ff66]">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-[#00eaff]/10 border border-[#00eaff]/30 rounded-lg text-[#00eaff]">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-lg text-[#7c3aed]">
                Lifelong Learner
              </span>
            </div>

            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://www.linkedin.com/in/rafiur-rahman-9b3723336"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5]/10 border border-[#0077b5]/30 rounded-lg text-[#0077b5] font-semibold hover:bg-[#0077b5]/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:rafiurrahman1918@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ea4335]/10 border border-[#ea4335]/30 rounded-lg text-[#ea4335] font-semibold hover:bg-[#ea4335]/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Email
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#00ff66]/20 to-[#00eaff]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-black/50 backdrop-blur-xl border border-[#00ff66]/30 rounded-xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-[#00ff66] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#00eaff] mb-2" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}