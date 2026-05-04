import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-primary/90 backdrop-blur-lg">
      <nav className="container-width flex h-20 items-center justify-between px-5 sm:px-8 lg:px-16">
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          Riyad<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <a href="/Md_Riyad_Hasan_CV.pdf" download className="hidden btn-primary lg:inline-flex">
          Download CV
        </a>

        <button
          type="button"
          className="inline-flex rounded-lg border border-slate-700 p-2 text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-primary px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}

            <a
              href="/Md_Riyad_Hasan_CV.pdf"
              download
              className="btn-primary mt-2"
              onClick={closeMenu}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;