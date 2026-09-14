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

    const sameCategory = selectedTechnologies.some(
      (item) => item.category === tech.category
    );

    if (sameCategory) {
      toast.warning(
        `You already selected a ${tech.category} technology!`
      );
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

        let badgeColor = "bg-base-200 text-base-content";

        if (tech.badge === "Popular") {
          badgeColor = "bg-sky-50 text-sky-500";
        }

        if (tech.badge === "Versatile") {
          badgeColor = "bg-emerald-50 text-emerald-600";
        }

        if (tech.badge === "Fast") {
          badgeColor = "bg-orange-50 text-orange-500";
        }

        if (tech.badge === "Standard") {
          badgeColor = "bg-emerald-50 text-emerald-600";
        }

        if (tech.badge === "Top SQL") {
          badgeColor = "bg-blue-50 text-blue-500";
        }

        if (tech.badge === "Cache") {
          badgeColor = "bg-red-50 text-red-500";
        }

        if (tech.badge === "Ubiquitous") {
          badgeColor = "bg-amber-50 text-amber-600";
        }

        if (tech.badge === "Essential") {
          badgeColor = "bg-sky-50 text-sky-500";
        }

        if (tech.badge === "Robust") {
          badgeColor = "bg-blue-50 text-blue-500";
        }

        if (tech.badge === "Modern") {
          badgeColor = "bg-cyan-50 text-cyan-500";
        }

        if (tech.badge === "Containers") {
          badgeColor = "bg-sky-50 text-sky-500";
        }

        return (
          <div
            key={tech.id}
            className="card border border-base-200 bg-base-100 shadow-sm"
          >
            <div className="card-body p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <span
                  className={`badge badge-sm border-0 ${badgeColor}`}
                >
                  {tech.badge}
                </span>
              </div>

              <h2 className="card-title mt-3 text-lg">
                {tech.name}
              </h2>

              <p className="text-sm text-base-content/60">
                {tech.description}
              </p>

              <div className="mt-4 flex items-center gap-2 border-t border-base-200 pt-4 text-sm">
                <span>{tech.category}</span>

                <span>{tech.difficulty}</span>

                <span className="ml-auto">
                  ⭐ {tech.rating}
                </span>
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