export const handleScroll = (id: string): void => {
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
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
