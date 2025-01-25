import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const TechStack = () => {
  return (
    <section className="relative w-screen min-h-screen bg-surface-primary">
      <div className="width-scaled h-full mx-auto py-16">
        <h3 className="under-header">
          My Tech Stack{" "}
          <FontAwesomeIcon icon={faLayerGroup} aria-hidden="true" />
        </h3>
      </div>
    </section>
  );
};

export default TechStack;
