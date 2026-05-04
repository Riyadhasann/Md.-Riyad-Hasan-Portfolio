import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-primary text-white">
      <Navbar />

      <Intro />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Leadership />
      <Education />
      <Certifications />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;