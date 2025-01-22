import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navItemsRight, navItemsLeft, navItemsLeftURL } from "@data/pageData";
import { handleScroll } from "@utilities/NavbarUtilities";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-12 flex justify-center items-center bg-surface-primary/75 backdrop-blur-lg backdrop-saturate-150 z-50">
      <div className="h-full width-scaled flex items-center justify-between">
        <div className="flex items-center gap-12">
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
        <div className="flex items-center gap-12">
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
  );
};

export default Navbar;
