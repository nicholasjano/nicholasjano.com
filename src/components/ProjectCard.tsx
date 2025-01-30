import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { ProjectInfo } from "@pageTypes/pageTypes";

const ProjectCard = ({ image, title, description, links }: ProjectInfo) => {
  return (
    <div className="w-full flex flex-col items-center gap-12">
      <img
        src={image}
        alt="Project Mockup"
        className="w-fit h-56 sm:h-96 2xl:h-[32rem]"
      />
      <div className="w-full lg:w-2/3 flex flex-col items-center gap-4">
        <h3 className="under-header text-brand-green text-center">{title}</h3>
        <p>{description}</p>
        <div className="text-xl text-brand-blue flex gap-8">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit project-link-hover"
            aria-label={`Navigate to Project GitHub`}
          >
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> GitHub
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit project-link-hover"
            aria-label={`Navigate to Project Link`}
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-lg"
              aria-hidden="true"
            />{" "}
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
