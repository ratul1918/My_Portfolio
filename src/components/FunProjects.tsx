import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Code, Gamepad2, Lightbulb, Calculator, Grid3x3 } from "lucide-react";
import { SectionMatrixRain } from "./SectionMatrixRain";

export function FunProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const funProjects = [
    {
      icon: Code,
      title: "OOP Practice Projects",
      description: "Object-oriented programming exercises and design pattern implementations",
      concepts: ["Inheritance", "Polymorphism", "Encapsulation", "Design Patterns"],
      color: "#00ff66"
    },
    {
      icon: Gamepad2,
      title: "C Programming Games",
      description: "Classic games built with C to master fundamentals",
      concepts: ["Pointers", "Memory Management", "Data Structures"],
      color: "#00eaff"
    },
    {
      icon: Calculator,
      title: "Calculator App",
      description: "Full-featured calculator with advanced operations",
      concepts: ["UI Logic", "State Management", "Event Handling"],
      color: "#7c3aed"
    },
    {
      icon: Grid3x3,
      title: "Tic-Tac-Toe AI",
      description: "Classic game with AI opponent using minimax algorithm",
      concepts: ["Game Theory", "Algorithms", "AI Logic"],
      color: "#00ff66"
    },
    {
      icon: Lightbulb,
      title: "Java DSA Projects",
      description: "Data structures and algorithms implementations in Java",
      concepts: ["Trees", "Graphs", "Sorting", "Searching"],
      color: "#00eaff"
    },
    {
      icon: Code,
      title: "Experimental Builds",
      description: "Spike projects for testing new technologies and concepts",
      concepts: ["Prototyping", "Innovation", "Learning"],
      color: "#7c3aed"
    },
  ];

  return (
    <section className="relative py-32 px-6 z-10 bg-linear-to-b from-black via-black/95 to-black overflow-hidden">
      <SectionMatrixRain opacity={0.28} speed={0.9} density="medium" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <span className="text-[#00ff66]">OOPS</span>
            <span className="text-white"> • </span>
            <span className="text-[#00eaff]">DSA</span>
            <span className="text-white"> • </span>
            <span className="text-[#7c3aed]">Experimental</span>
            <br />
            <span className="text-white/80">& Fun Projects</span>
          </h2>
          <p className="text-white/60 text-lg mt-4">
            Learning through building • Experimenting with concepts • Having fun with code
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-[#00ff66] via-[#00eaff] to-[#7c3aed] mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                transition: { duration: 0.2 }
              }}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: project.color, opacity: 0.2 }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all h-full">
                <motion.div
                  className="mb-4 p-3 rounded-xl w-fit"
                  style={{ 
                    backgroundColor: `${project.color}15`,
                    borderColor: `${project.color}40`,
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <project.icon size={32} style={{ color: project.color }} />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  {project.concepts.map((concept) => (
                    <motion.div
                      key={concept}
                      className="flex items-center gap-2 text-xs"
                      whileHover={{ x: 5 }}
                    >
                      <div 
                        className="w-1 h-1 rounded-full" 
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-white/70">{concept}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="absolute top-4 right-4 text-6xl font-bold opacity-5"
                  style={{ fontFamily: "JetBrains Mono, monospace", color: project.color }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            {"// More experimental projects and learning exercises available on GitHub"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}