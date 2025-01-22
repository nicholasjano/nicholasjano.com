import { navItems } from "@data/pageData";
import { handleScroll } from "@utilities/ScrollUtilities";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-12 flex justify-center items-center bg-surface-primary/75 backdrop-blur-lg backdrop-saturate-150 z-50">
      <div className="h-full width-scaled flex">
        <div className="h-full flex items-center justify-end gap-12 ml-auto">
          {navItems.map((item) => (
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
