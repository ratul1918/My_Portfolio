import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { SectionMatrixRain } from "./SectionMatrixRain";

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "C", level: 85 },
        { name: "Dart", level: 80 },
        { name: "Java", level: 75 },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Vite", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Radix UI", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 90 },
        { name: "PHP", level: 80 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      category: "Mobile & Database",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      category: "Concepts & Tools",
      skills: [
        { name: "OOP", level: 90 },
        { name: "DSA", level: 85 },
        { name: "System Design", level: 80 },
        { name: "Authentication", level: 90 },
        { name: "SaaS Architecture", level: 85 },
        { name: "Git & GitHub", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 z-10 overflow-hidden">
      <SectionMatrixRain opacity={0.3} speed={1} density="medium" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-4 text-[#00eaff]"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00eaff] to-[#7c3aed] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              whileHover={{ scale: 1.02, rotateX: 2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/10 to-[#00eaff]/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-black/60 backdrop-blur-xl border border-[#00ff66]/20 rounded-xl p-6 hover:border-[#00ff66]/50 transition-all">
                <h3 className="text-xl font-bold text-[#00ff66] mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/90">{skill.name}</span>
                        <span className="text-[#00eaff] text-sm" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00ff66] to-[#00eaff] rounded-full"
                          style={{
                            boxShadow: "0 0 10px #00ff66",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}