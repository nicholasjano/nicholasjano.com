import type { RoleInfo } from "@pageTypes/pageTypes";

const ExperienceCard = ({
  image,
  role,
  company,
  period,
  highlights,
}: RoleInfo) => {
  const paragraphs = highlights.trim().split("\n\n");
  return (
    <div className="bg-surface-primary p-8 rounded-[2.75rem] flex flex-col space-y-4">
      <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt="Photo of the Experience"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
        />
      </div>
      <div className="w-full flex flex-col experience-divider">
        <div className="flex flex-col space-y-1">
          <h3 className="text-xl sm:text-2xl font-medium text-brand-green">
            {role}
          </h3>
          <p>{company}</p>
          <p>{period}</p>
        </div>
        <div className="flex flex-col">
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
    </div>
  );
};

export default ExperienceCard;
