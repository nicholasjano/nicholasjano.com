import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScreenSize } from "@hooks/useScreenSize";
import { navItemsRight, navItemsLeft, navItemsLeftURL } from "@data/pageData";
import { handleScroll } from "@utilities/ScrollingUtilities";
import { useState } from "react";
import { useIconPadding } from "@hooks/useIconPadding";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useScreenSize();

  const { linkRefs, paddings } = useIconPadding(navItemsLeft);

  return (
    <>
      {isLargeScreen ? (
        // Navbar
        <nav className="w-screen h-12 flex justify-center items-center">
          <div className="h-full width-scaled flex items-center justify-between">
            <ul className="nav-items">
              {navItemsLeft.map((item, index) => (
                <li className="h-full flex items-center" key={index}>
                  <a
                    ref={linkRefs[index]}
                    href={navItemsLeftURL[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: `0 ${paddings[index]}`,
                      margin: `0 -${paddings[index]}`,
                    }}
                    className="h-full flex items-center text-xl nav-text-colours transition-colors duration-200 focus:outline-none"
                    aria-label={`Navigate to ${item.iconName}`}
                  >
                    <FontAwesomeIcon icon={item} />
                  </a>
                </li>
              ))}
            </ul>
            <ul className="nav-items">
              {navItemsRight.map((item) => (
                <li className="h-full flex items-center" key={item}>
                  <button
                    onClick={() => handleScroll(item.toLowerCase())}
                    className="h-full text-sm nav-text-colours transition-colors duration-200 focus:outline-none"
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        // Hamburger Menu
        <>
          <button
            className="fixed top-0 right-0 w-12 h-12 flex flex-col items-center justify-center gap-1.5 z-50 group"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`hamburger-line ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div className={`hamburger-line ${isOpen ? "opacity-0" : ""}`} />
            <div
              className={`hamburger-line ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
          <nav
            className={`w-full border-b-2 border-header-stroke transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="mt-4 navmenu-xs:mt-12">
              <ul className="flex flex-col items-center">
                {navItemsRight.map((item) => (
                  <li
                    key={item}
                    className="width-scaled border-b border-header-stroke/50 cursor-pointer"
                    onClick={() => {
                      handleScroll(item.toLowerCase());
                      setIsOpen(false);
                    }}
                  >
                    <button
                      className="text-base nav-text-colours w-full py-2 navmenu-xs:py-3 transition-colors duration-200 text-left focus:outline-none"
                      aria-label={`Navigate to ${item}`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="w-screen flex flex-row items-center justify-center gap-12 py-2">
                {navItemsLeft.map((item, index) => (
                  <li key={index}>
                    <a
                      href={navItemsLeftURL[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center w-12 h-12 text-[2rem] nav-text-colours transition-colors duration-200 focus:outline-none"
                      aria-label={`Navigate to ${item.iconName}`}
                    >
                      <FontAwesomeIcon icon={item} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
