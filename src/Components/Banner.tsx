import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto grid items-center gap-8 px-6 py-16 md:grid-cols-2">

        <div>
          <h1 className="text-4xl font-bold text-black md:text-5xl">
            Build Your Ideal
          </h1>

          <h1 className="mt-1 bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Development Stack
          </h1>

          <p className="mt-6 max-w-xl text-gray-600">
            Explore frontend, backend, database, and tooling options,<br/>
            compare them side by side, and put together the stack that
            fits your <br/>
            next project.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="rounded-md bg-linear-to-r from-[#F97316] to-[#DB2777] px-5 py-3 font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-300 px-6 py-3 text-gray-700">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src={BannerImage}
            alt="Development Stack"
            className="mx-auto w-[420px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;