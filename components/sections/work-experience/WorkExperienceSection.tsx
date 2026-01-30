import { workExperience, type WorkExperience } from "@/data/work-experience";

const WorkExperience = () => {
  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">Expériences professionnelles</h2>

      {/* Timeline container (vertical line) */}
      <div className="relative border-l-2 border-neutral-300">
        {/* Timeline items */}
        <div className="flex flex-col gap-8">
          {workExperience.map((experience) => (
            <TimelineItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </>
  );
};

type TimelineItemProps = {
  experience: WorkExperience;
};

const TimelineItem = ({ experience }: TimelineItemProps) => {
  const { role, company, description, date, location } = experience;

  return (
    <div className="relative flex">
      {/* Timeline dot */}
      <div className="relative -left-4 z-10 flex h-6 w-6 shrink-0 items-center justify-center md:h-8 md:w-8">
        <div className="h-3 w-3 rounded-full bg-blue-500 ring-3 ring-stone-100" />
      </div>

      {/* Card content */}
      <div className="grow rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        {/* Header */}
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">{role}</h3>
            <p className="font-medium text-blue-500">{company}</p>
          </div>
          <div className="mt-2 flex flex-col text-neutral-500 sm:mt-0 sm:items-end">
            <span>{date}</span>
            <span>{location}</span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 text-sm leading-relaxed text-neutral-800">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
