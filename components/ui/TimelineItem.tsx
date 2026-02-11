export type TimelineItemProps = {
  id: number;
  title: string;
  organization: string;
  description: string[];
  date: string;
  location: string;
};

const TimelineItem = ({
  title,
  organization,
  description,
  date,
  location,
}: TimelineItemProps) => (
  <div className="relative pb-8 pl-2 last:pb-0 lg:pl-8">
    <div className="absolute -left-2 flex h-full flex-col items-center lg:-left-5">
      {/* Vertical line */}
      <div className="bg-border h-full w-0.5"></div>
      {/* Dot */}
      <div className="border-surface bg-accent-solid ring-canvas absolute top-8 size-2.5 rounded-full ring-4"></div>
    </div>

    {/* Card */}
    <div className="bg-surface border-border rounded-xl border p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-accent-solid text-lg font-medium">
            {organization}
          </p>
        </div>
        <div className="text-fg-secondary flex flex-col sm:text-right">
          <time>{date}</time>
          <span>{location}</span>
        </div>
      </div>

      {/* Description */}
      <ul className="list-outside list-disc space-y-2 pl-5 text-base leading-relaxed">
        {description.map((item, index) => (
          <li key={index} className="pl-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TimelineItem;
