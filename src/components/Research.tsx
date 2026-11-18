import { motion } from "motion/react";
import {
  ArrowUpRight,
  BrainCircuit,
  ScanEye,
  FlaskConical,
} from "lucide-react";

export function Research() {
  return (
    <section className="research section-shell" id="research">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <div>
          <span className="eyebrow">RESEARCH / A NEW CHAPTER</span>
          <h2>
            Learning to build.
            <br />
            Learning to <em>discover.</em>
          </h2>
        </div>
        <p>
          I’m starting my journey in AI, machine learning,
          <br />
          and computer vision as an aspiring researcher.
        </p>
      </motion.div>
      <div className="research-intro">
        <span className="research-status">
          <i /> EARLY EXPLORATION
        </span>
        <p>
          I want to understand how intelligent systems learn, see, and make
          decisions. This is a space for the questions I’m exploring and the
          research habits I’m beginning to develop.
        </p>
      </div>
      <div className="research-grid">
        {[
          {
            icon: BrainCircuit,
            title: "Artificial intelligence",
            label: "01 / INTELLIGENT SYSTEMS",
            text: "Exploring the ideas behind AI and large language models, and how they can support useful software.",
            question: "How can AI help solve practical problems? ",
          },
          {
            icon: FlaskConical,
            title: "Machine learning",
            label: "02 / LEARNING FROM DATA",
            text: "Starting with fundamentals: data, models, training, and evaluation. Building an understanding of how to test an idea carefully.",
            question: "How do we know a model is learning something useful?",
          },
          {
            icon: ScanEye,
            title: "Computer vision",
            label: "03 / UNDERSTANDING IMAGES",
            text: "Beginning to explore how computers interpret images, with an interest in image classification and visual recognition.",
            question: "What does it take for a machine to understand an image?",
          },
        ].map((item) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="research-card"
          >
            <item.icon size={30} strokeWidth={1.3} />
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="research-question">
              <small>A QUESTION I’M EXPLORING</small>
              <p>{item.question}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="research-next">
        <div>
          <span className="eyebrow">MY NEXT STEPS</span>
          <p>Read. Experiment. Evaluate. Document.</p>
          <span className="research-plan">
            My plan is to build small experiments, keep learning notes, and
            share what I find as the work develops.
          </span>
        </div>
        <a href="mailto:rafiurrahman1918@gmail.com" className="text-link">
          Connect about research <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
