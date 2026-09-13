import { toast } from "react-toastify";
import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {

  const handleRemove = (tech: Technology) => {
    onRemove(tech.id);
    toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) return;

    onRemoveAll();
    toast.success("All technologies removed.");
  };

  return (
    <aside className="card h-fit border border-base-200 bg-base-100 shadow-md lg:sticky lg:top-24">

      <div className="card-body p-5">

        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="card-title text-lg">
              Your Stack
            </h2>

            <p className="mt-1 text-xs text-base-content/50">
              {selectedTechnologies.length}{" "}
              {selectedTechnologies.length === 1
                ? "Technology"
                : "Technologies"}{" "}
              Selected
            </p>
          </div>

          <button
            type="button"
            onClick={handleRemoveAll}
            disabled={selectedTechnologies.length === 0}
            className="btn btn-ghost btn-xs text-error"
          >
            Remove All
          </button>
        </div>

        {selectedTechnologies.length === 0 ? (
          <div className="alert mt-4 bg-base-200">
            <div>
              <p className="font-medium">
                Your stack is empty.
              </p>

              <p className="text-xs text-base-content/50">
                Add technologies to build your stack.
              </p>
            </div>
          </div>
        ) : (

          <div className="mt-4 space-y-3">
            {selectedTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-base-200 p-3"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-base-200">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {tech.name}
                  </p>

                  <span className="badge badge-ghost badge-xs mt-1">
                    {tech.category}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(tech)}
                  className="btn btn-circle btn-ghost btn-xs text-error"
                >
                  ✕
                </button>

              </div>
            ))}
          </div>
        )}

      </div>
    </aside>
  );
};

export default YourStack;