export const handleScroll = (id: string): void => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (id === "stats") {
    const position = window.innerHeight;
    window.scrollTo({ top: position, behavior: "smooth" });
  } else {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
