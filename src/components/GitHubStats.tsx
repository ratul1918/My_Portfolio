import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Github, Star, GitFork, Activity } from "lucide-react";
import { SectionMatrixRain } from "./SectionMatrixRain";

export function GitHubStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Total Repositories", value: "30+", icon: Github, color: "#00ff66" },
    { label: "Stars Earned", value: "50+", icon: Star, color: "#00eaff" },
    { label: "Active Projects", value: "8+", icon: Activity, color: "#7c3aed" },
    { label: "Contributions", value: "500+", icon: GitFork, color: "#00ff66" },
  ];

  const languages = [
    { name: "TypeScript", percentage: 35, color: "#00eaff" },
    { name: "JavaScript", percentage: 30, color: "#00ff66" },
    { name: "Dart", percentage: 15, color: "#7c3aed" },
    { name: "C", percentage: 10, color: "#00eaff" },
    { name: "PHP", percentage: 5, color: "#00ff66" },
    { name: "Other", percentage: 5, color: "#7c3aed" },
  ];

  // Mock contribution data for heatmap
  const generateContributions = () => {
    const weeks = 52;
    const daysPerWeek = 7;
    const contributions = [];
    
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < daysPerWeek; day++) {
        weekData.push(Math.floor(Math.random() * 5));
      }
      contributions.push(weekData);
    }
    return contributions;
  };

  const contributions = generateContributions();

  const getContributionColor = (level: number) => {
    const colors = [
      "#0e1117",
      "#00ff6620",
      "#00ff6640",
      "#00ff6680",
      "#00ff66",
    ];
    return colors[level] || colors[0];
  };

  return (
    <section className="relative py-32 px-6 z-10 overflow-hidden">
      <SectionMatrixRain opacity={0.25} speed={1.1} density="low" />
      
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
            GitHub Activity
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#00ff66] to-[#00eaff] mx-auto" />
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div 
                className="absolute inset-0 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: stat.color }}
              />
              <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-white/30 transition-all">
                <stat.icon className="mx-auto mb-3" size={32} style={{ color: stat.color }} />
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "JetBrains Mono, monospace", color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-linear-to-r from-[#00ff66]/10 to-[#00eaff]/10 rounded-2xl blur-2xl" />
          <div className="relative bg-black/70 backdrop-blur-xl border border-[#00ff66]/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Contribution Activity
            </h3>
            <div className="overflow-x-auto">
              <div className="flex gap-1 min-w-max">
                {contributions.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => (
                      <motion.div
                        key={`${weekIndex}-${dayIndex}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.2, delay: weekIndex * 0.01 }}
                        whileHover={{ scale: 1.5 }}
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: getContributionColor(day) }}
                        title={`${day} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-6 text-xs text-white/50">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: getContributionColor(level) }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </motion.div>

        {/* Language Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-linear-to-r from-[#00eaff]/10 to-[#7c3aed]/10 rounded-2xl blur-2xl" />
          <div className="relative bg-black/70 backdrop-blur-xl border border-[#00eaff]/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Language Distribution
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/90">{lang.name}</span>
                    <span 
                      className="text-sm"
                      style={{ fontFamily: "JetBrains Mono, monospace", color: lang.color }}
                    >
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ 
                        backgroundColor: lang.color,
                        boxShadow: `0 0 10px ${lang.color}`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/ratul1918"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#00ff66] to-[#00eaff] text-black font-bold rounded-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00ff66" }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            View Full GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}