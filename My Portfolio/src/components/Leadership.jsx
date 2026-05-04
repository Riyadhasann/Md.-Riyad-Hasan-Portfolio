import { Handshake, UsersRound } from "lucide-react";

function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-slate-950/40">
      <div className="container-width">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Leadership & Volunteering
          </p>

          <h2 className="section-title">Leadership and campus involvement</h2>

          <p className="section-subtitle">
            Activities that helped me develop teamwork, communication,
            coordination, leadership, and event management skills.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card">
            <div className="mb-6 flex gap-4">
              <div className="h-fit rounded-xl bg-accent/10 p-3 text-accent">
                <UsersRound size={26} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Operations Coordinator
                </h3>

                <p className="mt-2 text-lg font-medium text-accent">
                  JUKTI Club, Independent University, Bangladesh
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Organized university workshops, club activities, and technical events",
                "Coordinated logistics for Tech Fest and SETS Fest",
                "Worked with team members to manage event planning, communication, and execution",
                "Supported smooth event operations through task coordination and volunteer management"
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-softText">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="mb-6 flex gap-4">
              <div className="h-fit rounded-xl bg-roseAccent/20 p-3 text-roseAccent">
                <Handshake size={26} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Volunteer
                </h3>

                <p className="mt-2 text-lg font-medium text-roseAccent">
                  TechFest & Campus Events, Independent University, Bangladesh
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Organized various university workshops and led networking events to connect students with alumni.",
                "Actively volunteered for TechFest Spring 2023 and 2024, assisting with event coordination and operational activities.",
                "Contributed to the successful execution of multiple IUB programs through dedicated volunteering and team support.",
                "Recognized for strong leadership in managing event logistics and fostering professional connections within the campus community."
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-softText">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;