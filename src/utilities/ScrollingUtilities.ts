export const handleScroll = (id: string, push: boolean = false): void => {
  if (id === "home") {
    // If home, go to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (id === "stats") {
    // If stats, go 100vh
    const position = window.innerHeight;
    window.scrollTo({ top: position, behavior: "smooth" });
  } else {
    // Otherwise, get from id
    const section = document.getElementById(id);
    if (section) {
      if (push) {
        // Calculate 3rem offset for navbar when going to a specific project
        const offset =
          3 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        const position =
          section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: position, behavior: "smooth" });
      } else {
        // Scroll normally to the section
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
};
