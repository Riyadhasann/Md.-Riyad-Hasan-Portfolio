import { BriefcaseBusiness } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Experience
          </p>

          <h2 className="section-title">Professional experience</h2>

          <p className="section-subtitle">
            Work experience that helped me develop communication, customer
            handling, training, teamwork, and operational problem-solving skills.
          </p>
        </div>

        <div className="card">
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="h-fit rounded-xl bg-accent/10 p-3 text-accent">
                <BriefcaseBusiness size={26} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Agent Trainer & Customer Support Associate
                </h3>

                <p className="mt-2 text-lg font-medium text-accent">
                  SuperTel Limited
                </p>
              </div>
            </div>

            <span className="w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-softText">
              2021 – 2022
            </span>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {[
              "Assisted customers with service-related issues and inquiries",
              "Processed and managed customer data accurately",
              "Trained new employees on customer support processes and service guidelines",
              "Maintained professional communication with customers, clients, and team members",
              "Supported daily operational tasks to improve service efficiency"
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-softText">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;