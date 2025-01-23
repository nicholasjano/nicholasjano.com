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
        <nav className="fixed top-0 left-0 w-screen h-12 flex justify-center items-center bg-surface-primary/75 backdrop-blur-lg backdrop-saturate-150 z-50">
          <div className="h-full width-scaled flex items-center justify-between">
            <div className="nav-items">
              {navItemsLeft.map((item, index) => (
                <a
                  key={index}
                  href={navItemsLeftURL[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-300 hover:text-gray-500 transition-colors duration-200 focus:outline-none"
                  aria-label={`Navigate to ${item.iconName}`}
                >
                  <FontAwesomeIcon icon={item} />
                </a>
              ))}
            </div>
            <div className="nav-items">
              {navItemsRight.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase())}
                  className="text-sm text-gray-300 hover:text-gray-500 transition-colors duration-200 focus:outline-none"
                  aria-label={`Navigate to ${item}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      ) : (
        // Hamburger Menu
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
      )}
    </>
  );
};

export default Navbar;
