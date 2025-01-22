import AnimatedNumber from "@components/AnimatedNumber";

const Stats = () => {
  return (
    <section id="stats" className="overflow-x-clip absolute inset-x-0 top-0">
      <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-surface-stats transform translate-y-full z-30">
        <div className="h-full w-full flex flex-col justify-center items-center space-y-20">
          <div className="flex flex-col justify-center items-center text-center text-3xl sm:text-4xl space-y-2">
            <h2 className="font-semibold">My Monthly Stats</h2>
            <p className="font-medium">12/21/24 - 01/21/25</p>
          </div>

          <div className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-4 text-center text-base sm:text-lg font-normal px-12">
            <div className="stats-info">
              <p className="font-medium">GitHub</p>
              <p>
                <AnimatedNumber number={88} /> Commits made across{" "}
                <AnimatedNumber number={4} /> Repositories
              </p>
            </div>
            <div className="stats-info">
              <p className="font-medium">Latest Project</p>
              <p>LeetBuddy</p>
            </div>
            <div className="stats-info">
              <p className="font-medium">LeetCode</p>
              <p>
                <AnimatedNumber number={20} /> Problems Solved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
