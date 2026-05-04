import { Layers } from "lucide-react";
import { skills } from "../assets/data/skills";

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Skills
          </p>

          <h2 className="section-title">Technical skills and tools</h2>

          <p className="section-subtitle">
            A focused set of programming languages, tools, and core computer
            science concepts I use while building academic and personal projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="card">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-accent/10 p-3 text-accent">
                  <Layers size={22} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-softText transition duration-300 hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;