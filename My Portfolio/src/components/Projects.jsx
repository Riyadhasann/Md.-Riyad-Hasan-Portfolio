import { FolderGit2 } from "lucide-react";
import { projects } from "../assets/data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-950/40">
      <div className="container-width">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Projects
          </p>

          <h2 className="section-title">Selected work and academic projects</h2>

          <p className="section-subtitle">
            A collection of practical projects involving web development,
            database systems, dashboards, API integration, and real-world
            problem solving.
          </p>
        </div>

        {/* <div className="mb-8 flex items-center gap-3 rounded-2xl border border-slate-800 bg-secondary/70 p-5">
          <div className="rounded-xl bg-accent/10 p-3 text-accent">
            <FolderGit2 size={24} />
          </div>

          <p className="text-sm leading-7 text-softText">
            Each project includes placeholder GitHub and Live Demo buttons for
            now. You can replace them later with your real project links.
          </p>
        </div> */}

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;