import { ExperienceInfos } from "@data/pageData";
import ExperienceCard from "@components/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="relative w-screen bg-surface-dark">
      <div className="component-base">
        <div className="header-texts">
          <h2>My Experience</h2>
          <p className="under-header">
            A closer look at my professional journey.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ExperienceInfos.map((experience) => (
            <ExperienceCard {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
