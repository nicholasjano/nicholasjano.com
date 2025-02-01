import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLocationDot,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FooterInfo } from "@data/pageData";
import { useIconPadding } from "@hooks/useIconPadding";

const Footer = () => {
  const { linkRefs: linkRefsFooter, paddings: paddingsFooter } = useIconPadding(
    {
      iconCount: FooterInfo.external.length,
      fullSize: 48,
    }
  );

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
          <ul className="flex justify-center md:justify-start items-start md:items-end gap-10 text-2xl sm:text-3xl">
            {FooterInfo.external.map((item, index) => (
              <li key={index}>
                <a
                  ref={linkRefsFooter[index]}
                  href={item.link}
                  aria-label={item.aria}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: `${paddingsFooter[index].y}px ${paddingsFooter[index].x}px`,
                    margin: `-${paddingsFooter[index].y}px -${paddingsFooter[index].x}px`,
                  }}
                  className="hover-colour transition-colors duration-200 focus:outline-none flex items-center"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-center">Curated by Nicholas Jano</p>
      </div>
    </footer>
  );
};

export default Footer;
