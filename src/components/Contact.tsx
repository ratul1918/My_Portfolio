import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { SectionMatrixRain } from "./SectionMatrixRain";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock)
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ratul1918",
      color: "#00ff66",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "#00eaff",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rafiur@example.com",
      color: "#7c3aed",
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 z-10 overflow-hidden">
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
            Get In Touch
          </h2>
          <p className="text-white/70 text-lg mb-6">
            Let's build something amazing together
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-[#00eaff] to-[#7c3aed] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#00ff66]/10 to-[#00eaff]/10 rounded-2xl blur-2xl" />
            <div className="relative bg-black/70 backdrop-blur-xl border border-[#00ff66]/20 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2 text-sm">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff66] focus:ring-2 focus:ring-[#00ff66]/20 transition-all"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00eaff] focus:ring-2 focus:ring-[#00eaff]/20 transition-all"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm">
                    Message
                  </label>
                  <motion.textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all resize-none"
                    placeholder="Your message..."
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-linear-to-r from-[#00ff66] to-[#00eaff] text-black font-bold rounded-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px #00ff66" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#00eaff]/10 to-[#7c3aed]/10 rounded-2xl blur-2xl" />
              <div className="relative bg-black/70 backdrop-blur-xl border border-[#00eaff]/20 rounded-2xl p-8">
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Connect With Me
                </h3>
                <p className="text-white/70 mb-6">
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-all group"
                    >
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${link.color}20` }}
                      >
                        <link.icon size={24} style={{ color: link.color }} />
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {link.label}
                        </div>
                        <div className="text-white/50 text-sm">
                          {link.href === "https://github.com/ratul1918"
                            ? "@ratul1918"
                            : link.label === "Email"
                            ? "rafiur@example.com"
                            : "Connect on LinkedIn"}
                        </div>
                      </div>
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <Send size={20} style={{ color: link.color }} />
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#7c3aed]/10 to-[#00ff66]/10 rounded-2xl blur-2xl" />
              <div className="relative bg-black/70 backdrop-blur-xl border border-[#7c3aed]/20 rounded-2xl p-8 text-center">
                <p className="text-white/60 mb-4">Currently available for</p>
                <div className="space-y-2">
                  <div className="text-[#00ff66] font-semibold">
                    Freelance Projects
                  </div>
                  <div className="text-[#00eaff] font-semibold">
                    Full-time Opportunities
                  </div>
                  <div className="text-[#7c3aed] font-semibold">
                    Research Collaborations
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/50 text-sm" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            © 2026 Rafiur Rahman. Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-white/30 text-xs mt-2">
            {"<Designed for the future />"} 
          </p>
        </motion.div>
      </div>
    </section>
  );
}