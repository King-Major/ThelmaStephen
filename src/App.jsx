import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div id="top">
      <Header />
      <Projects />
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
