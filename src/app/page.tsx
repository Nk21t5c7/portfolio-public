import Header from "./components/layout/Header";
import About from "./components/ui/Home/About";
import Footer from "./components/layout/Footer";
import Skills from "./components/ui/Home/Skills";
import Projects from "./components/ui/Home/Projects";
import Experience from "./components/ui/Home/Experience";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
