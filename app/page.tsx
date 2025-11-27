import { TechEnum } from '@/constants/TechEnum';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import ProjectList from './components/projects/ProjectList';
import Skills from './components/Skills';
import TechStack from './components/ui/TechStackChip';

const App = () => {
  return (
    <>
      <h1>Bienvenue sur mon Portfolio</h1>
      <About />
      <ProjectList />
      <Skills />
      <Education />
      <Contact />
      <TechStack techStack={[TechEnum.Angular, TechEnum.SpringBoot]} />
    </>
  );
};

export default App;
