import { ArrowDown, Download, Mail } from "lucide-react";

function Intro() {
  return (
    <section
      id="home"
      className="section-padding flex min-h-screen items-center pt-32"
    >
      <div className="container-width grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Personal Portfolio
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I am{" "}
            <span className="text-accent">Md. Riyad Hasan</span>
          </h1>

          <h2 className="mb-6 text-xl font-semibold text-softText sm:text-2xl">
            Computer Science Student | Web Developer | Aspiring Software Engineer
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-8 text-softText">
            I am a Computer Science and Engineering student at Independent
            University, Bangladesh with hands-on experience in full-stack web
            development, database systems, and software project development. I
            enjoy building practical web applications using PHP, MySQL,
            JavaScript, HTML, CSS, Bootstrap, Python, Dart, and Java.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown className="ml-2" size={18} />
            </a>

            <a href="/Md_Riyad_Hasan_CV.pdf" download className="btn-secondary">
              Download CV
              <Download className="ml-2" size={18} />
            </a>

            <a href="#contact" className="btn-rose">
              Contact Me
              <Mail className="ml-2" size={18} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-secondary p-4 shadow-card">
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900 p-6">
              <img
                src="/images/profile.jpg"
                alt="Md. Riyad Hasan"
                className="mb-6 h-80 w-full rounded-2xl object-cover object-top"
              />

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-softText">Based in</p>
                  <h3 className="text-lg font-semibold text-white">
                    Dhaka, Bangladesh
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-softText">Current focus</p>
                  <h3 className="text-lg font-semibold text-white">
                    Web Development, Software Engineering, AI/ML
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;