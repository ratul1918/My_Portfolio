import { Research } from "../components/Research";
import { RecentWork, Interests } from "../components/RecentWork";
import { useEffect, useState } from "react";
import { motion, MotionConfig, useScroll, useSpring } from "motion/react";
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Menu,
  X,
  Copy,
  Check,
  Code2,
  Layers,
  Smartphone,
  Sun,
  Moon,
} from "lucide-react";
import portrait from "../assets/d20210aa9445e5e607e401fd25046fe77293a792.png";

const email = "rafiurrahman1918@gmail.com";
const projects = [
  {
    name: "ServeSync",
    type: "FULL-STACK · RESTAURANT SAAS",
    description:
      "Bringing restaurant operations into one considered workspace. Authentication, analytics, and the systems behind the service.",
    stack: ["React", "TypeScript", "Node.js"],
    repo: "ServeSync",
    theme: "serve",
    number: "01",
  },
  {
    name: "UIU CGPA Calculator",
    type: "MOBILE · STUDENT TOOLS",
    description:
      "Making academic planning a little simpler. A mobile calculator built around grades, credits, and retakes.",
    stack: ["Flutter", "Dart"],
    repo: "UIU-CGPA-CALCULATOR",
    theme: "grade",
    number: "02",
  },
  {
    name: "Social Media",
    type: "WEB · INTERFACE EXPLORATION",
    description:
      "Exploring the building blocks of a social platform, from a readable feed to groups and shared conversations.",
    stack: ["React", "Vite", "Tailwind CSS"],
    repo: "Social-Media",
    theme: "social",
    number: "03",
  },
];
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.7 },
};

function ProjectArt({ theme }: { theme: string }) {
  return (
    <div className={`project-art ${theme}`} aria-hidden="true">
      <span className="concept-label">INTERFACE STUDY</span>
      {theme === "serve" ? (
        <div className="dashboard">
          <aside>
            <b>
              serve<span>sync</span>
            </b>
            <i className="selected">Overview</i>
            <i>Orders</i>
            <i>Menu</i>
            <i>Analytics</i>
            <i>Settings</i>
            <small>WORKSPACE / 01</small>
          </aside>
          <div className="dashboard-main">
            <div className="dash-heading">
              Your day, at a glance.<span>↗</span>
            </div>
            <p>A little clarity. A better service.</p>
            <div className="dash-stats">
              <div>
                <small>REVENUE</small>
                <strong>৳ 24,850</strong>
                <em>↗ Today’s overview</em>
              </div>
              <div>
                <small>ORDERS</small>
                <strong>128</strong>
                <em>Across your restaurant</em>
              </div>
            </div>
            <div className="chart-title">
              Service activity <span>This week</span>
            </div>
            <div className="chart">
              {[34, 52, 42, 74, 61, 90, 72, 95, 80, 64, 86, 100].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      ) : theme === "grade" ? (
        <div className="grade-art">
          <span className="math-symbol">A+</span>
          <div className="phone">
            <div className="phone-notch" />
            <small>YOUR ACADEMIC COMPANION</small>
            <b>
              Every credit
              <br />
              counts.
            </b>
            <div className="grade-ring">
              <span>
                3.85<small>SEMESTER GPA</small>
              </span>
            </div>
            <div className="course">
              Data Structures <span>A</span>
            </div>
            <div className="course">
              Mathematics <span>A−</span>
            </div>
            <div className="phone-button">Plan your next semester ↗</div>
          </div>
          <span className="math-symbol second">∑</span>
        </div>
      ) : (
        <div className="social-art">
          <div className="social-sidebar">
            <b>s.</b>
            <i />
            <i />
            <i />
          </div>
          <div className="social-feed">
            <div className="social-title">
              A space to connect.<span>✳</span>
            </div>
            <div className="social-post">
              <div className="avatar" />
              <div>
                <b>The creative corner</b>
                <small>A place for your next idea</small>
              </div>
              <span>···</span>
            </div>
            <div className="post-art">
              <div />
              <strong>
                Good ideas
                <br />
                start together.
              </strong>
              <span>↗</span>
            </div>
            <div className="post-bottom">
              ♡ &nbsp; ◯ &nbsp; ↗<span>Save for later</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* Storage can be unavailable. */
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f4f2eb" : "#141513");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* Theme still works in memory. */
    }
  }, [theme]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
  return (
    <MotionConfig reducedMotion="user">
      <div className="portfolio">
        <motion.div className="reading-progress" style={{ scaleX }} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="header">
          <a className="wordmark" href="#home" aria-label="Rafiur Rahman home">
            rr<span>✳</span>
          </a>
          <nav
            className={menuOpen ? "nav open" : "nav"}
            aria-label="Main navigation"
          >
            {[
              ["Work", "work"],
              ["Recent", "recent"],
              ["About", "about"],
              ["Research", "research"],
              ["Interests", "interests"],
            ].map(([label, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="mobile-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <ArrowUpRight size={16} />
            </a>
          </nav>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>
        <main id="main">
          <section className="hero section-shell" id="home">
            <div className="hero-top">
              <span className="eyebrow">
                <i /> RAFIUR RAHMAN — LEARNER & BUILDER
              </span>
              <span className="edition">PERSONAL PORTFOLIO / 2026</span>
            </div>
            <div className="hero-layout">
              <div className="hero-copy">
                <motion.h1
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  Thoughtful code.
                  <br />
                  Meaningful
                  <br />
                  <span className="hero-accent">experiences.</span>
                  <span className="heading-dot">✳</span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.8 }}
                >
                  <p>
                    I’m Rafiur, a CSE student learning development through vibe
                    coding.
                    <br className="desktop-break" /> An aspiring researcher
                    exploring AI, ML, and computer vision.
                  </p>
                  <a className="button primary" href="#work">
                    Explore my work <ArrowDown size={17} />
                  </a>
                  <a
                    className="hero-github"
                    href="https://github.com/ratul1918"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              </div>
              <div className="hero-art" aria-hidden="true">
                <div className="art-grid" />
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="sculpture">
                  <div className="sculpture-core" />
                  {Array.from({ length: 15 }, (_, i) => (
                    <div
                      key={i}
                      className="sculpture-ring"
                      style={{ "--i": i } as React.CSSProperties}
                    />
                  ))}
                </div>
                <span className="art-coordinate">EXPLORATION / 001</span>
                <div className="art-caption">
                  <span className="tiny-cross">+</span> IDEAS → SYSTEMS →
                  EXPERIENCES
                </div>
                <span className="art-star">✳</span>
              </div>
            </div>
            <div className="hero-bottom">
              <span>
                <i /> OPEN TO PROJECTS & COLLABORATIONS
              </span>
              <span>
                DEVELOPMENT LEARNER &nbsp; / &nbsp; ASPIRING RESEARCHER
              </span>
              <a href="#work" aria-label="Scroll to selected work">
                <ArrowDown size={18} />
              </a>
            </div>
          </section>
          <RecentWork />
          <section className="work section-shell" id="work">
            <motion.div {...reveal} className="section-heading">
              <div>
                <span className="eyebrow">01 / SELECTED WORK</span>
                <h2>
                  Built with purpose<span>.</span>
                </h2>
              </div>
              <p>
                A few projects from my journey.
                <br />
                Each one, a different problem to solve.
              </p>
            </motion.div>
            <div className="project-grid">
              {projects.map((project) => (
                <motion.article
                  key={project.repo}
                  {...reveal}
                  className={`project project-${project.theme}`}
                >
                  <a
                    className="project-image-link"
                    href={`https://github.com/ratul1918/${project.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Explore ${project.name} source code`}
                  >
                    <ProjectArt theme={project.theme} />
                    <span className="project-open">
                      <ArrowUpRight size={22} />
                    </span>
                  </a>
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span>/{project.number}</span>
                  </div>
                  <div className="project-title">
                    <h3>
                      <a
                        href={`https://github.com/ratul1918/${project.repo}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.name}
                      </a>
                    </h3>
                    <ArrowUpRight size={24} />
                  </div>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
            <a
              className="text-link all-projects"
              href="https://github.com/ratul1918?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              More experiments on GitHub <ArrowUpRight size={18} />
            </a>
          </section>
          <section className="about section-shell" id="about">
            <motion.div {...reveal} className="portrait-wrap">
              <img src={portrait} alt="Rafiur Rahman" loading="lazy" />
              <span className="portrait-mark">
                A LITTLE
                <br />
                ABOUT ME ↗
              </span>
              <div className="portrait-caption">
                RAFIUR RAHMAN <span>LEARNER & ASPIRING RESEARCHER</span>
              </div>
            </motion.div>
            <motion.div {...reveal} className="about-copy">
              <span className="eyebrow">02 / THE PERSON BEHIND THE CODE</span>
              <h2>
                Always curious.
                <br />
                Always <em>building.</em>
              </h2>
              <p>
                I’m a Computer Science & Engineering student who enjoys
                understanding how things work—and making them work better.
              </p>
              <p>
                My projects span web applications, backend systems, mobile
                tools, and game development. I’m drawn to the part where a messy
                problem becomes a clear, useful experience, and I’m currently
                exploring AI and intelligent software systems.
              </p>
              <p>
                I use vibe coding—AI-assisted development—to turn ideas into
                prototypes. I’m still learning development, strengthening my
                programming fundamentals, and working to understand the code and
                systems I build.
              </p>
              <div className="about-note">
                <span>MY APPROACH</span>
                <p>
                  Think it through. Build it carefully.
                  <br />
                  Keep learning along the way.
                </p>
              </div>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/rafiur-rahman-9b3723336"
                target="_blank"
                rel="noreferrer"
              >
                A little more on LinkedIn <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </section>
          <section className="expertise section-shell" id="expertise">
            <motion.div {...reveal} className="section-heading">
              <div>
                <span className="eyebrow">03 / MY TOOLKIT</span>
                <h2>
                  The tools behind
                  <br />
                  the thinking<span>.</span>
                </h2>
              </div>
              <p>
                A toolkit I’m learning through projects.
                <br />
                Growing with each experiment.
              </p>
            </motion.div>
            <div className="expertise-grid">
              {[
                {
                  icon: Code2,
                  title: "Interfaces that make sense.",
                  text: "Responsive web experiences with attention to structure, interaction, and the details people notice.",
                  tools: "React / TypeScript / JavaScript / Tailwind CSS",
                },
                {
                  icon: Layers,
                  title: "What happens underneath.",
                  text: "APIs, authentication, and data models that connect an interface to the things it needs to do.",
                  tools: "Node.js / Express / PHP / MySQL",
                },
                {
                  icon: Smartphone,
                  title: "Beyond the browser.",
                  text: "Cross-platform mobile projects, backed by a growing foundation in algorithms and system design.",
                  tools: "Flutter / Dart / C / Java / Git",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  {...reveal}
                  className="expertise-item"
                >
                  <div className="expertise-top">
                    <item.icon size={26} strokeWidth={1.3} />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="tool-list">{item.tools}</span>
                </motion.div>
              ))}
            </div>
          </section>
          <Research />
          <Interests />
          <section className="contact section-shell" id="contact">
            <motion.div {...reveal}>
              <div className="contact-top">
                <span className="eyebrow">04 / WHAT’S NEXT?</span>
                <span>
                  <i /> LET’S MAKE SOMETHING GOOD
                </span>
              </div>
              <a className="contact-heading" href={`mailto:${email}`}>
                Have an idea?
                <br />
                Let’s <em>build it.</em>
                <ArrowUpRight />
              </a>
              <div className="contact-bottom">
                <p>
                  A project, an opportunity, or just a hello.
                  <br />
                  My inbox is a good place to start.
                </p>
                <div className="email-row">
                  <a href={`mailto:${email}`}>{email}</a>
                  <button
                    onClick={copyEmail}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                  <span className="copy-status" role="status">
                    {copied ? "Copied!" : ""}
                  </span>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
        <footer className="footer section-shell">
          <span>© {new Date().getFullYear()} Rafiur Rahman</span>
          <div>
            <a
              href="https://github.com/ratul1918"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={15} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafiur-rahman-9b3723336"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </MotionConfig>
  );
}
