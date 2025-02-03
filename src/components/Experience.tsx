import { ExperienceInfos } from "@data/pageData";
import ExperienceCard from "@components/ExperienceCard";
import FadeInOnView from "@components/FadeInOnView";

const Experience = () => {
  return (
    <section id="experience" className="relative w-screen bg-surface-dark">
      <div className="component-base">
        <FadeInOnView delay={100} className="w-full">
          <div className="header-texts">
            <h2>My Experience</h2>
            <p className="under-header">
              A closer look at my professional journey.
            </p>
          </div>
        </FadeInOnView>
        <FadeInOnView delay={200}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {ExperienceInfos.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </FadeInOnView>
      </div>
    </section>
  );
};

export default Experience;
