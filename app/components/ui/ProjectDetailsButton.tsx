import { ChevronsRight } from 'lucide-react';

const ProjectDetailsButton = () => {
  return (
    <button
      className="bg-blue-600 text-sm
       font-medium px-3 py-3 rounded-lg
       hover:opacity-90 shadow-md hover:cursor-pointer transition duration-200"
    >
      <span className="inline-flex items-center gap-1 text-white">
        Voir détails
        <ChevronsRight size={20} />
      </span>
    </button>
  );
};

export default ProjectDetailsButton;
