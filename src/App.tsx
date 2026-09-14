import { Suspense, useState } from "react";
import Navbar from "./Components/navbar";
import Banner from "./Components/Banner";
import TechnologyCard from "./Components/TechnologyCard";
import type { Technology } from "./types/technology";
import Footer from "./Components/footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getTechnologies = async (): Promise<Technology[]> => {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error("Failed to load technology data");
  }

  const data: Technology[] = await response.json();
  return data;
};

const technologyPromise = getTechnologies();

function App() {
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === tech.id
    );

    const sameCategory = selectedTechnologies.some(
      (item) => item.category === tech.category
    );

    if (alreadyAdded || sameCategory) return;

    setSelectedTechnologies((previous) => [
      ...previous,
      tech,
    ]);
  };

  const handleRemove = (id: string) => {
    setSelectedTechnologies((previous) =>
      previous.filter((tech) => tech.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <Banner />

      <Suspense
        fallback={
          <div className="flex min-h-96 items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <span className="loading loading-spinner loading-lg"></span>

              <p className="text-sm text-base-content/60">
                Loading technologies...
              </p>
            </div>
          </div>
        }
      >
        <TechnologyCard
          technologyPromise={technologyPromise}
          selectedTechnologies={selectedTechnologies}
          onAddToStack={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </Suspense>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;