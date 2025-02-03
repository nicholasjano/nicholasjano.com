import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { stackTitles, stackItems } from "@data/pageData";
import StackCard from "@components/StackCard";
import FadeInOnView from "@components/FadeInOnView";
import { useResponsiveThreshold } from "@hooks/useResponsiveThreshold";

const TechStack = () => {
  const threshold = useResponsiveThreshold();
  return (
    <section className="relative w-screen bg-surface-primary">
      <div className="w-fit xs:width-scaled max-w-screen-2xl h-full mx-auto py-16 space-y-12">
        <FadeInOnView delay={100} className="w-full">
          <h3 className="w-full under-header text-center xs:text-left">
            My Tech Stack
            <span className="text-brand-blue ml-3">
              <FontAwesomeIcon icon={faLayerGroup} aria-hidden="true" />
            </span>
          </h3>
        </FadeInOnView>
        <FadeInOnView delay={200} threshold={threshold}>
          <div className="w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
            {stackTitles.map((title, index) => (
              <StackCard key={index} title={title} items={stackItems[index]} />
            ))}
          </div>
        </FadeInOnView>
      </div>
    </section>
  );
};

export default TechStack;
