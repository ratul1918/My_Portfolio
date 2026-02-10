import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { SectionMatrixRain } from "./SectionMatrixRain";

export function FeaturedProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "ServeSync",
      subtitle: "Restaurant Management SaaS",
      description: "A comprehensive SaaS platform for restaurant management featuring authentication, dashboards with analytics, dark mode support, and scalable architecture. Built with modern tech stack for enterprise-grade performance.",
      stack: ["React", "Vite", "Node.js", "Express", "TypeScript", "Tailwind"],
      tags: ["SaaS", "Full-Stack", "Type-Safe", "Modern UI"],
      gradient: "from-[#00ff66] to-[#00eaff]",
      features: [
        "Auth system",
        "Dashboards & analytics",
        "Dark mode",
        "Scalable SaaS layout"
      ]
    },
    {
      title: "UIU Talent Showcase",
      subtitle: "University Media Platform",
      description: "A React + PHP powered platform with video, audio, and blog portals. Features role-based access control (viewer, creator, admin), media uploads, mini-players, voting system, and dynamic leaderboard.",
      stack: ["React", "PHP", "MySQL"],
      tags: ["Media System", "Backend Logic", "Access Control"],
      gradient: "from-[#00eaff] to-[#7c3aed]",
      features: [
        "Video/Audio/Blog portals",
        "Role-based access",
        "Media uploads",
        "Voting & leaderboard"
      ]
    },
    {
      title: "University CGPA Calculator",
      subtitle: "Cross-Platform Mobile App",
      description: "Flutter-based mobile application for accurate CGPA calculation with real-time updates, retake logic handling, and academic accuracy. Clean Material Design UI for seamless user experience.",
      stack: ["Flutter", "Dart"],
      tags: ["Mobile App", "Algorithms", "Cross-Platform"],
      gradient: "from-[#7c3aed] to-[#00ff66]",
      features: [
        "Real-time CGPA calculation",
        "Retake logic",
        "Academic accuracy",
        "Material Design UI"
      ]
    },
    {
      title: "Modern Social Network Platform",
      subtitle: "Professional Networking UI",
      description: "A contemporary social networking platform built with React, Vite, and Tailwind. Features comprehensive feed system, authentication, groups, events, and professional networking capabilities with focus on frontend architecture.",
      stack: ["React", "Vite", "Tailwind CSS"],
      tags: ["Social Platform", "UI Systems", "Frontend Architecture"],
      gradient: "from-[#00ff66] via-[#00eaff] to-[#7c3aed]",
      features: [
        "Feed system",
        "Authentication",
        "Groups & events",
        "Professional networking"
      ]
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 z-10 overflow-hidden">
      <SectionMatrixRain opacity={0.35} speed={1.3} density="high" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-4 text-[#7c3aed]"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff66] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 rounded-2xl blur-2xl group-hover:opacity-20 transition-all`} />
              
              <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#00ff66]/50 transition-all h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "Orbitron, sans-serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-[#00eaff] text-sm">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] hover:bg-[#00ff66]/20"
                    >
                      <Github size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-[#00eaff]/10 border border-[#00eaff]/30 text-[#00eaff] hover:bg-[#00eaff]/20"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </div>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[#00ff66] mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
                        <span className="text-white/60 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/80"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current rounded-lg text-[#00ff66]`}
                    >
                      {tag}
                    </span>
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