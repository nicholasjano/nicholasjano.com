const Stats = () => {
  return (
    <div className="overflow-x-clip absolute inset-x-0 top-0">
      <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-surface-stats transform translate-y-full z-30">
        <div className="h-full w-full flex flex-col justify-center items-center space-y-20">
          <div className="flex flex-col justify-center items-center text-center text-3xl sm:text-4xl font-semibold space-y-2">
            <h2>My Monthly Stats</h2>
            <p>12/21/24 - 01/21/25</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-4 text-center w-full px-12">
              <div className="stats-info">
                <p className="font-semibold">GitHub</p>
                <p>12 Commits made across 3 Repositories</p>
              </div>
              <div className="stats-info">
                <p className="font-semibold">Latest Project</p>
                <p>LeetBuddy</p>
              </div>
              <div className="stats-info">
                <p className="font-semibold">LeetCode</p>
                <p>14 Problems Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
