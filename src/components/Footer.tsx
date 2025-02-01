import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLocationDot,
  faEnvelope,
  faPhone,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FooterInfo } from "@data/pageData";

const Footer = () => {
  return (
    <footer id="contact" className="relative w-screen bg-surface-dark">
      <div className="width-scaled max-w-screen-2xl mx-auto pt-24 pb-6 flex flex-col items-center">
        <div className="header-texts">
          <h2>Contact Me</h2>
          <p className="under-header">Let's write the next chapter together.</p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-start md:justify-between gap-3 md:gap-0 text-center md:text-left mt-12 pb-6 mb-6 border-b border-header-stroke/50">
          <div className="space-y-3">
            <h3 className="under-header">{FooterInfo.name}</h3>
            <p className="text-lg sm:text-xl">
              <span className="mr-3">
                <FontAwesomeIcon icon={faCode} />
              </span>
              {FooterInfo.role}
            </p>
            <p className="text-lg sm:text-xl">
              <span className="mr-3">
                <FontAwesomeIcon icon={faSchool} />
              </span>
              {FooterInfo.school}
            </p>
            <p className="text-lg sm:text-xl block md:flex">
              <span className="mr-3">
                <FontAwesomeIcon
                  className="w-fit md:w-[1.5625rem]"
                  icon={faLocationDot}
                />
              </span>
              {FooterInfo.location}
            </p>
          </div>
          <div className="flex justify-center md:justify-start items-start md:items-end gap-8 text-2xl sm:text-3xl">
            <a
              href={`mailto:${FooterInfo.email}`}
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-colour transition-colors duration-200 focus:outline-none flex items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href={`tel:${FooterInfo.phone}`}
              aria-label="Phone"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-colour transition-colors duration-200 focus:outline-none flex items-center"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a
              href="https://github.com/nicholasjano"
              aria-label="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-colour transition-colors duration-200 focus:outline-none flex items-center"
            >
              <FontAwesomeIcon icon={FooterInfo.icons.github} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicholasjano/"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-colour transition-colors duration-200 focus:outline-none flex items-center"
            >
              <FontAwesomeIcon icon={FooterInfo.icons.linkedin} />
            </a>
          </div>
        </div>
        <p className="text-sm text-center">Curated by Nicholas Jano</p>
      </div>
    </footer>
  );
};

export default Footer;
