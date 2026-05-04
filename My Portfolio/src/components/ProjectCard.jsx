import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden p-0">
      <div className="h-72 overflow-hidden rounded-t-2xl bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-contain p-3 transition duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>

        <p className="mb-5 text-sm leading-7 text-softText">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-accent"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-white">
            Key Features
          </h4>

          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 text-sm leading-6 text-softText"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <a
            href={project.github}
            className="btn-secondary flex-1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <Github className="ml-2" size={17} />
          </a>

          <a
            href={project.liveDemo}
            className="btn-primary flex-1"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <ExternalLink className="ml-2" size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;