import { use } from "react";
import type { Technology } from "../types/technology";
import TechnologyList from "./TechnologyList";
import YourStack from "./Yourstack";

interface TechnologyCardProps {
  technologyPromise: Promise<Technology[]>;
  selectedTechnologies: Technology[];
  onAddToStack: (tech: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const TechnologyCard = ({
  technologyPromise,
  selectedTechnologies,
  onAddToStack,
  onRemove,
  onRemoveAll,
}: TechnologyCardProps) => {

  const technologies = use(technologyPromise);

  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-4 py-12 md:px-6"
    >

      <div className="mb-8">
        <h2 className="text-3xl font-bold md:text-4xl">
          Explore{" "}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-base-content/60 md:text-base">
          Pick technologies from different categories to build your ideal
          development stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

        <div className="lg:col-span-3">
          <TechnologyList
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            onAddToStack={onAddToStack}
          />
        </div>

        <YourStack
          selectedTechnologies={selectedTechnologies}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
        />

      </div>
    </section>
  );
};

export default TechnologyCard;