import { Award } from "lucide-react";
import { certifications } from "../assets/data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-slate-950/40">
      <div className="container-width">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Certifications
          </p>

          <h2 className="section-title">Certificates and learning</h2>

          <p className="section-subtitle">
            Certifications and learning activities focused on prompt engineering,
            Microsoft 365 Copilot, communication, and professional development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certificate) => (
            <div key={certificate.title} className="card">
              <div className="mb-5 flex gap-4">
                <div className="h-fit rounded-xl bg-accent/10 p-3 text-accent">
                  <Award size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-base font-medium text-accent">
                    {certificate.issuer}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm leading-7 text-softText">
                {certificate.date && <p>{certificate.date}</p>}
                {certificate.expiry && <p>{certificate.expiry}</p>}
                {certificate.certificateId && <p>{certificate.certificateId}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;