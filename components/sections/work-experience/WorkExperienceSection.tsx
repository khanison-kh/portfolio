import SectionTitle from "@/components/layout/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { workExperience } from "@/data/work-experience";

const WorkExperience = () => {
  return (
    <>
      <SectionTitle title="Expérience professionnelle" />
      <div className="flex flex-col">
        {workExperience.map((experience) => (
          <TimelineItem key={experience.id} {...experience} />
        ))}
      </div>
    </>
  );
};

export default WorkExperience;
