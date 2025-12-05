import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

export default App;
