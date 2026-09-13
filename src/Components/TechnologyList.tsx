import { toast } from "react-toastify";
import type { Technology } from "../types/technology";

interface TechnologyListProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onAddToStack: (tech: Technology) => void;
}

const TechnologyList = ({
  technologies,
  selectedTechnologies,
  onAddToStack,
}: TechnologyListProps) => {

  const handleAdd = (tech: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === tech.id
    );

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    onAddToStack(tech);
    toast.success(`${tech.name} added to your stack!`);
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => {
        const isAdded = selectedTechnologies.some(
          (item) => item.id === tech.id
        );

        return (
          <div
            key={tech.id}
            className="card border border-base-200 bg-base-100 shadow-sm"
          >
            <div className="card-body p-5">

              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <span className="badge badge-secondary badge-sm">
                  {tech.badge}
                </span>
              </div>

              <h2 className="card-title mt-3 text-lg">
                {tech.name}
              </h2>

              <p className="min-h-16 text-sm text-base-content/60">
                {tech.description}
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                <span className="badge badge-ghost badge-sm">
                  {tech.category}
                </span>

                <span className="badge badge-outline badge-sm">
                  {tech.difficulty}
                </span>
              </div>

              <div className="mt-2 text-sm">
                ⭐ <span className="font-semibold">{tech.rating}</span>
              </div>

              <div className="card-actions mt-3">
                <button
                  type="button"
                  onClick={() => handleAdd(tech)}
                  disabled={isAdded}
                  className={`btn btn-sm w-full border-0 text-white ${
                    isAdded
                      ? "btn-disabled"
                      : "bg-black hover:bg-gray-800"
                  }`}
                >
                  {isAdded
                    ? "✓ Added to Stack"
                    : "Add to Stack"}
                </button>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyList;