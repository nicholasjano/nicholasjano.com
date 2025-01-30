import { ProjectInfos } from "@data/pageData";
import ProjectCard from "@components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-screen min-h-screen bg-surface-primary"
    >
      <div className="component-base">
        <div className="header-texts">
          <h2>My Projects</h2>
          <p className="under-header">
            Here's what I've been building along the way.
          </p>
        </div>
        <div className="project-list">
          {ProjectInfos.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
