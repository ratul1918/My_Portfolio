import { MatrixRain } from "../components/MatrixRain";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { FunProjects } from "../components/FunProjects";
import { GitHubStats } from "../components/GitHubStats";
import { Contact } from "../components/Contact";
import { Navigation } from "../components/Navigation";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <MatrixRain />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <FunProjects />
      <GitHubStats />
      <Contact />
    </div>
  );
}
