import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { ProjectInfo } from "@pageTypes/pageTypes";

const ProjectCard = ({ image, title, description, links }: ProjectInfo) => {
  const hasGitHub = Boolean(links?.github?.trim());
  const hasPreview = Boolean(links?.preview?.trim());

  return (
    <div
      id={title.toLowerCase()}
      className="w-full flex flex-col items-center gap-12"
    >
      <img
        src={image}
        alt="Project Mockup"
        className="w-fit h-56 sm:h-96 2xl:h-[32rem]"
      />
      <div className="w-full lg:w-2/3 flex flex-col items-center gap-4">
        <h3 className="under-header text-brand-green text-center">{title}</h3>
        <p>{description}</p>
        {(hasGitHub || hasPreview) && (
          <div className="text-xl text-brand-blue flex gap-8">
            {hasGitHub && (
              <a
                href={links?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit link-hover py-2.5 -my-2.5 after:bottom-2.5"
                aria-label={`Externally navigate to the Project GitHub`}
              >
                GitHub
                <span className="ml-1.5">
                  <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                </span>
              </a>
            )}
            {hasPreview && (
              <a
                href={links?.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit link-hover py-2.5 -my-2.5 after:bottom-2.5"
                aria-label={`Externally navigate to the Project Link`}
              >
                Preview
                <span className="ml-1.5 text-lg">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    aria-hidden="true"
                  />
                </span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
