import { Code2, GraduationCap, Users } from "lucide-react";

function About() {
  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: "CSE Student",
      text: "Studying Computer Science and Engineering at Independent University, Bangladesh."
    },
    {
      icon: <Code2 size={24} />,
      title: "Web Development",
      text: "Experienced in building practical projects with frontend, backend, database, and dashboard features."
    },
    {
      icon: <Users size={24} />,
      title: "Team Experience",
      text: "Customer support, employee training, event coordination, and volunteering experience."
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-950/40">
      <div className="container-width">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            About Me
          </p>

          <h2 className="section-title">A little about who I am</h2>

          <p className="section-subtitle">
            I enjoy building useful software, learning new technologies, and
            improving my problem-solving skills through real projects.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card">
            <p className="mb-5 text-base leading-8 text-softText">
              I am currently pursuing a Bachelor of Science in Computer Science
              and Engineering at Independent University, Bangladesh. I have
              experience developing academic and personal projects involving
              authentication systems, dashboards, booking platforms, inventory
              management, API integration, and responsive web interfaces.
            </p>

            <p className="mb-5 text-base leading-8 text-softText">
              My main interests are software engineering, web development,
              artificial intelligence, machine learning, and prompt engineering.
              I like working on projects that solve practical problems and help
              me understand how software systems work from idea to execution.
            </p>

            <p className="text-base leading-8 text-softText">
              I also have experience in customer support, employee training,
              communication, event coordination, and volunteering. These
              experiences helped me build teamwork, leadership, communication,
              and problem-solving skills.
            </p>
          </div>

          <div className="grid gap-5">
            {highlights.map((item) => (
              <div key={item.title} className="card">
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  {item.icon}
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-softText">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;