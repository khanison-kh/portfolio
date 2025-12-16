import Section from "../components/layout/Section";
import { sections } from "../data/sections";

const App = () => {
  return (
    <>
      {sections.map((s) => {
        return (
          <Section key={s.id} {...s}>
            <s.Component />
          </Section>
        );
      })}
    </>
  );
};

export default App;
