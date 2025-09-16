import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { useRef, RefObject } from "react";
import AnimatedNumber from "@components/AnimatedNumber";
import { useAnimationTrigger } from "@hooks/useAnimationTrigger";
import { useFetchStats } from "@hooks/useFetchStats";
import { latestProject } from "@data/pageData";
import { getMonthlyDates } from "@utilities/GetDateEST";
import { handleScroll } from "@utilities/ScrollingUtilities";

const Stats = () => {
  const { stats, isLoaded } = useFetchStats();
  const { prevMonth, currMonth } = getMonthlyDates();
  const sectionRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  useAnimationTrigger({ elementRef: sectionRef, isLoaded });

  return (
    <section id="stats" className="overflow-x-clip absolute inset-x-0 top-0">
      <div className="absolute inset-0 w-screen h-screen-lvh overflow-hidden bg-surface-dark transform translate-y-full z-30">
        <div className="safe h-full w-full flex flex-col justify-center items-center space-y-4 stats-xs:space-y-20">
          <div className="flex flex-col justify-center items-center text-center space-y-2">
            <h2>My Monthly Stats</h2>
            <p className="under-header">
              {prevMonth} - {currMonth}
            </p>
          </div>
          <div
            ref={sectionRef}
            className="w-fit stats-cols:width-scaled max-w-screen-2xl grid grid-rows-3 stats-cols:grid-rows-none stats-cols:grid-cols-3 gap-2 stats-xs:gap-4 text-center text-base sm:text-lg mx-12 stats-cols:mx-0"
          >
            <div className="stats-info">
              <p className="font-medium">GitHub</p>
              <p>
                <AnimatedNumber number={stats.totalCommitsPastMonth} />{" "}
                {stats.totalCommitsPastMonth === 1 ? "Commit" : "Commits"} made
                across{" "}
                <AnimatedNumber number={stats.uniqueRepositoriesPastMonth} />{" "}
                {stats.uniqueRepositoriesPastMonth === 1
                  ? "Repository"
                  : "Repositories"}
              </p>
            </div>
            <div className="stats-info">
              <p className="font-medium">Latest Project</p>
              <div className="overflow-y-visible">
                <button
                  onClick={() =>
                    handleScroll({
                      id: latestProject.toLowerCase(),
                      push: true,
                    })
                  }
                  className="link-hover py-3 -my-3 sm:py-2.5 sm:-my-2.5 after:bottom-3 sm:after:bottom-2.5 text-brand-blue"
                  aria-label={`Navigate to ${latestProject}`}
                >
                  {latestProject}
                  <span className="ml-1.5 text-sm sm:text-base">
                    <FontAwesomeIcon icon={faDownLong} aria-hidden="true" />
                  </span>
                </button>
              </div>
            </div>
            <div className="stats-info">
              <p className="font-medium">Monthly Active Users</p>
              <p>
                Over <AnimatedNumber number={stats.monthlyActiveUsers} /> users across all apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
