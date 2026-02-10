import SectionTitle from "@/components/layout/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { education } from "@/data/education";

const Education = () => {
  return (
    <>
      <SectionTitle title="Formation" />
      <div className="flex flex-col">
        {education.map((educationItem) => (
          <TimelineItem key={educationItem.id} {...educationItem} />
        ))}
      </div>
    </>
  );
};

export default Education;
