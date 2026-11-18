import { motion } from "motion/react";
import { ArrowUpRight, Gamepad2, Leaf, Users, Trophy } from "lucide-react";

const recentWork = [
  {
    title: "The LightHouse",
    category: "GAME DEVELOPMENT · NOV 2026",
    status: "Playable prototype",
    icon: Gamepad2,
    description:
      "A first-person lighthouse horror game built in Unity. The project includes an Acts 1–5 greybox, local gameplay, and an optional Java backend for cloud saves and run tracking.",
    detail:
      "Exploring gameplay systems, client-server architecture, and real-time communication.",
    stack: ["Unity", "C#", "Java", "PostgreSQL"],
    repo: "TheLightHouse/tree/phase-1",
    linkLabel: "Explore the project",
  },
  {
    title: "Cha Ghor",
    category: "MANAGEMENT SYSTEM · SEP 2026",
    status: "Source available",
    icon: Leaf,
    description:
      "A tea garden management project focused on a practical, domain-specific software problem.",
    detail:
      "A recent addition to my work on applications for everyday operations.",
    stack: ["JavaScript", "Management systems"],
    repo: "Cha-Ghor-Main",
    linkLabel: "View repository",
  },
  {
    title: "CollabForge",
    category: "OPEN SOURCE · AUG 2026",
    status: "In development",
    icon: Users,
    description:
      "An early-stage collaboration platform for developers and students. The repository foundation and roadmap are in place; the product is being built incrementally.",
    detail:
      "Planned: issue tracking, Kanban boards, contributor discovery, and AI-assisted issue triage.",
    stack: ["Next.js · planned", "Spring Boot · planned", "FastAPI · planned"],
    repo: "collabforge",
    linkLabel: "Read the roadmap",
  },
  {
    title: "Elite Pitch",
    category: "FOOTBALL DASHBOARD · MAY 2026",
    status: "Hosted demo",
    icon: Trophy,
    description:
      "A football league dashboard with match management, calculated standings, tournament rules, and export tools. Built with React and a Supabase backend.",
    detail:
      "Explore the deployed interface or read the implementation and setup documentation.",
    stack: ["React", "TypeScript", "Supabase"],
    repo: "Football-Dashboard",
    linkLabel: "View source",
    demo: "https://football-dashboard-ivory.vercel.app",
  },
];
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6 },
};

export function RecentWork() {
  return (
    <section className="recent-work section-shell" id="recent">
      <motion.div {...reveal} className="section-heading">
        <div>
          <span className="eyebrow">ON MY DESK / RECENT WORK</span>
          <h2>
            Learning by
            <br />
            making things<span>.</span>
          </h2>
        </div>
        <p>
          From game systems to practical web tools.
          <br />
          Recent repositories and a demo you can explore.
        </p>
      </motion.div>
      <div className="recent-grid">
        {recentWork.map((project) => (
          <motion.article
            key={project.title}
            {...reveal}
            className="recent-card"
          >
            <div className="recent-card-top">
              <project.icon size={27} strokeWidth={1.3} />
              <span
                className={`project-status ${project.demo ? "has-demo" : ""}`}
              >
                {project.status}
              </span>
            </div>
            <span className="recent-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="recent-detail">{project.detail}</p>
            <div className="tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="recent-links">
              <a
                href={`https://github.com/ratul1918/${project.repo}`}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
                <ArrowUpRight size={16} />
              </a>
              {project.demo && (
                <a
                  className="demo-link"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open demo <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
      <p className="work-context">
        Project dates reflect repository activity. Development status is based
        on project documentation, reviewed November 2026.
      </p>
    </section>
  );
}

export function Interests() {
  return (
    <section className="interests section-shell" id="interests">
      <motion.div {...reveal} className="section-heading">
        <div>
          <span className="eyebrow">CURRENT CURIOSITIES</span>
          <h2>
            What keeps me
            <br />
            asking questions<span>.</span>
          </h2>
        </div>
        <p>
          Areas I’m learning and exploring.
          <br />A direction of travel, not an expertise score.
        </p>
      </motion.div>
      <div className="interest-list">
        {[
          [
            "01",
            "AI & intelligent software",
            "Machine learning fundamentals, LLMs, computer vision, and natural language processing. I’m interested in how these ideas become useful applications.",
          ],
          [
            "02",
            "Interfaces & mobile experiences",
            "UI/UX design, Figma, TypeScript, and React Native—learning how clear design and thoughtful engineering work together.",
          ],
          [
            "03",
            "Systems & data",
            "Database design, software engineering, and system design. Understanding the choices behind maintainable applications.",
          ],
          [
            "04",
            "Problem solving",
            "Strengthening my data structures and algorithms foundation, with Codeforces practice as part of my learning goals.",
          ],
        ].map(([n, title, text]) => (
          <motion.div key={n} {...reveal} className="interest-row">
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.div>
        ))}
      </div>
      <div className="learning-links">
        <a
          className="text-link"
          href="https://codeforces.com/profile/rafiur_"
          target="_blank"
          rel="noreferrer"
        >
          My Codeforces profile <ArrowUpRight size={16} />
        </a>
        <a
          className="text-link"
          href="https://github.com/ratul1918"
          target="_blank"
          rel="noreferrer"
        >
          Follow my learning journey <ArrowUpRight size={16} />
        </a>
      </div>
      <motion.div {...reveal} className="milestones">
        <span className="eyebrow">ALONG THE WAY</span>
        <div>
          <h3>3rd place</h3>
          <p>
            System Analysis and Design Project Showcase
            <br />
            UIU CSE Project Showcase · Summer 2026
          </p>
        </div>
        <div>
          <h3>Top 50 teams</h3>
          <p>
            Qualified through the preliminary round
            <br />
            CUET CSE Fest Hackathon
          </p>
        </div>
      </motion.div>
    </section>
  );
}
