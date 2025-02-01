import nickImage from "../assets/NickMain.webp";
import { personalDescription } from "@data/pageData";

const About = () => {
  const paragraphs = personalDescription.trim().split("\n\n");
  return (
    <section id="about" className="relative w-screen bg-surface-primary">
      <div className="component-base border-b border-header-stroke/50">
        <div className="header-texts">
          <h2>About me</h2>
          <p className="under-header">
            Every developer has a story -{" "}
            <span className="block sm:inline text-brand-green">
              here's mine.
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="relative w-72 h-72 about-xs:w-96 about-xs:h-96 flex-shrink-0">
            <div className="absolute inset-0 bg-brand-blue rounded-2xl blur-md opacity-40" />
            <img
              src={nickImage}
              alt="Photo of Nicholas Jano"
              className="relative w-full h-full object-cover object-top rounded-2xl"
            />
          </div>
          <div>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
