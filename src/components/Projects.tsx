import { ProjectInfos } from "@data/pageData";
import ProjectCard from "@components/ProjectCard";
import FadeInOnView from "@components/FadeInOnView";

const Projects = () => {
  return (
    <section id="projects" className="relative w-screen bg-surface-primary">
      <div className="component-base">
        <FadeInOnView delay={100} className="w-full">
          <div className="header-texts">
            <h2>My Projects</h2>
            <p className="under-header">
              Here's what I've been building along the way.
            </p>
          </div>
        </FadeInOnView>
        <FadeInOnView delay={200}>
          <div className="project-list">
            {ProjectInfos.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </FadeInOnView>
      </div>
    </section>
  );
};

export default Projects;
