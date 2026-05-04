import { GraduationCap } from "lucide-react";
import { education } from "../assets/data/education";

function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-width">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Education
          </p>

          <h2 className="section-title">Academic background</h2>

          <p className="section-subtitle">
            My academic journey in computer science and pre-university education.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <div key={item.institution} className="card">
              <div className="mb-5 flex gap-4">
                <div className="h-fit rounded-xl bg-accent/10 p-3 text-accent">
                  <GraduationCap size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.institution}
                  </h3>

                  <p className="mt-2 text-base font-medium text-accent">
                    {item.degree}
                  </p>
                </div>
              </div>

              <span className="mb-4 inline-flex rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-softText">
                {item.duration}
              </span>

              <p className="text-sm leading-7 text-softText">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;