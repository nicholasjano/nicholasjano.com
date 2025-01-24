import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScreenSize } from "@hooks/useScreenSize";
import { navItemsRight, navItemsLeft, navItemsLeftURL } from "@data/pageData";
import { handleScroll } from "@utilities/NavbarUtilities";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useScreenSize();

  return (
    <>
      {isLargeScreen ? (
        // Navbar
        <nav className="w-screen h-12 flex justify-center items-center">
          <div className="h-full width-scaled flex items-center justify-between">
            <ul className="nav-items">
              {navItemsLeft.map((item, index) => (
                <li key={index}>
                  <a
                    href={navItemsLeftURL[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-300 hover:text-gray-500 transition-colors duration-200 focus:outline-none"
                    aria-label={`Navigate to ${item.iconName}`}
                  >
                    <FontAwesomeIcon icon={item} />
                  </a>
                </li>
              ))}
            </ul>
            <ul className="nav-items">
              {navItemsRight.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScroll(item.toLowerCase())}
                    className="text-sm text-gray-300 hover:text-gray-500 transition-colors duration-200 focus:outline-none"
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
            <div className="mt-12">
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
                      className="w-full py-3 text-base text-gray-300 hover:text-gray-500 transition-colors duration-200 text-left focus:outline-none"
                      aria-label={`Navigate to ${item}`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-row items-center justify-center gap-10 w-[90%] py-2 mx-auto">
                {navItemsLeft.map((item, index) => (
                  <li key={index}>
                    <a
                      href={navItemsLeftURL[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="text-[2rem] p-2 text-gray-300 hover:text-gray-500 transition-colors duration-200 focus:outline-none"
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
