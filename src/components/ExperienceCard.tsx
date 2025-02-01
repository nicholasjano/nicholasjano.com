import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { RoleInfo } from "@pageTypes/pageTypes";
import { useResizeHeight } from "@hooks/useResizeHeight";

const ExperienceCard = ({
  image,
  role,
  company,
  period,
  highlights,
}: RoleInfo) => {
  const paragraphs = highlights.trim().split("\n\n");
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { maxHeight, isResizing } = useResizeHeight({ contentRef });

  return (
    <div className="bg-surface-primary p-6 rounded-[2.25rem] flex flex-col space-y-4">
      <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt="Photo of the Experience"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.025]"
        />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col space-y-1 pb-4 border-b border-header-stroke/50">
          <h3 className="under-header text-brand-green">
            {role}
          </h3>
          <p>{company}</p>
          <p>{period}</p>
        </div>
        <div
          style={{ maxHeight: isExpanded ? `${maxHeight}px` : 0 }}
          className={`overflow-hidden ${
            isResizing ? "" : "transition-all duration-1000 ease-in-out"
          } ${isExpanded ? "opacity-100" : "opacity-0"}`}
          ref={contentRef}
        >
          <div className="flex flex-col py-4 border-b border-header-stroke/50">
            <h3 className="text-lg sm:text-xl font-medium mb-2 text-brand-green">
              Role Highlights
            </h3>
            <div>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <button
          className="flex items-center space-x-2 h-12 py-4 -mb-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-2xl text-brand-green transition-transform duration-1000 ease-in-out ${
              isExpanded ? "rotate-180 translate-y-[2px]" : "-translate-y-[1px]"
            }`}
          />
          <span className="translate-y-[1px]">
            {isExpanded ? "Hide Details" : "View Details"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;
