import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScreenSize } from "@hooks/useScreenSize";
import { navItemsRight, navItemsLeft, navItemsLeftURL } from "@data/pageData";
import { handleScroll } from "@utilities/ScrollingUtilities";
import { useState } from "react";
import { useIconPadding } from "@hooks/useIconPadding";
import type { refType } from "@pageTypes/pageTypes";

const Navbar = ({ introRef }: refType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [instantClose, setInstantClose] = useState(false);
  const isLargeScreen = useScreenSize();

  const { linkRefs: linkRefsNavBar, paddings: paddingsNavBar } = useIconPadding(
    {
      iconCount: navItemsLeft.length,
      fullSize: 40,
    }
  );

  return (
    <>
      {isLargeScreen ? (
        // Navbar for large screens
        <nav className="w-screen h-12 flex justify-center items-center">
          <div className="h-full width-scaled flex items-center justify-between">
            <ul className="nav-items">
              {navItemsLeft.map((item, index) => (
                <li className="flex items-center" key={index}>
                  <a
                    ref={linkRefsNavBar[index]}
                    href={navItemsLeftURL[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: `${paddingsNavBar[index].y}px ${paddingsNavBar[index].x}px`,
                      margin: `-${paddingsNavBar[index].y}px -${paddingsNavBar[index].x}px`,
                    }}
                    className="flex items-center text-xl hover-colour transition-colors duration-200 focus:outline-none"
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
                    onClick={() =>
                      handleScroll({ id: item.toLowerCase(), ref: introRef })
                    }
                    className="h-full text-sm hover-colour transition-colors duration-200 focus:outline-none"
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
        // Hamburger Menu for small screens
        <>
          <button
            className="safe fixed top-0 right-0 w-12 h-12 flex flex-col items-center justify-center gap-1.5 z-50 group"
            aria-label="Toggle navigation menu"
            onClick={() => {
              if (!isOpen) {
                setInstantClose(false);
              }
              setIsOpen(!isOpen);
            }}
          >
            <div
              className={`hamburger-line transition-transform ${
                instantClose ? "duration-0" : "duration-300"
              } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`hamburger-line transition-opacity ${
                instantClose ? "duration-0" : "duration-300"
              } ${isOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`hamburger-line transition-transform ${
                instantClose ? "duration-0" : "duration-300"
              } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
          <nav
            className={`safe w-full border-b-2 border-header-stroke transition-transform ${
              instantClose ? "duration-0" : "duration-300 ease-in-out"
            } ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
          >
            <div className="mt-4 navmenu-xs:mt-12">
              <ul className="flex flex-col items-center">
                {navItemsRight.map((item) => (
                  <li
                    key={item}
                    className="width-scaled border-b border-header-stroke/50 cursor-pointer"
                    onClick={() => {
                      handleScroll({ id: item.toLowerCase(), ref: introRef });
                      setIsOpen(false);
                    }}
                  >
                    <button
                      className="text-base hover-colour w-full py-2 navmenu-xs:py-3 transition-colors duration-200 text-left focus:outline-none"
                      aria-label={`Navigate to ${item}`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="w-full flex flex-row items-center justify-center gap-12 py-2">
                {navItemsLeft.map((item, index) => (
                  <li key={index}>
                    <a
                      href={navItemsLeftURL[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setInstantClose(true);
                        setIsOpen(false);
                      }}
                      className="flex items-center justify-center w-12 h-12 text-[2rem] hover-colour transition-colors duration-200 focus:outline-none"
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
