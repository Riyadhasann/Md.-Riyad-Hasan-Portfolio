import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Contact
          </p>

          <h2 className="section-title">Let&apos;s connect</h2>

          <p className="section-subtitle">
            I am open to internship opportunities, junior developer roles,
            software engineering opportunities, and AI/ML-related learning or
            project work.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Contact Information
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:hassanriyad666@gmail.com"
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition duration-300 hover:border-accent"
              >
                <Mail className="shrink-0 text-accent" size={22} />
                <div>
                  <p className="text-sm text-softText">Email</p>
                  <p className="font-medium text-white">
                    hassanriyad666@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:01906102858"
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition duration-300 hover:border-accent"
              >
                <Phone className="shrink-0 text-accent" size={22} />
                <div>
                  <p className="text-sm text-softText">Phone</p>
                  <p className="font-medium text-white">01906102858</p>
                </div>
              </a>

              <div className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
                <MapPin className="shrink-0 text-accent" size={22} />
                <div>
                  <p className="text-sm text-softText">Location</p>
                  <p className="font-medium text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition duration-300 hover:border-accent"
              >
                <Linkedin className="shrink-0 text-accent" size={22} />
                <div>
                  <p className="text-sm text-softText">LinkedIn</p>
                  <p className="font-medium text-white">
                    linkedin.com/in/your-linkedin
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition duration-300 hover:border-accent"
              >
                <Github className="shrink-0 text-accent" size={22} />
                <div>
                  <p className="text-sm text-softText">GitHub</p>
                  <p className="font-medium text-white">
                    github.com/your-github
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form className="card">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Send a Message
            </h3>

            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-softText">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="input-field"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-softText">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="input-field"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-softText">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Write your message..."
                className="input-field resize-none"
              />
            </div>

            <button type="button" className="btn-primary">
              Send Message
              <Send className="ml-2" size={18} />
            </button>

          
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
