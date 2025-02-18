import nickImage from "@assets/nickMain.webp";
import { personalDescription, mainInfoRootMargin } from "@data/pageData";
import FadeInOnView from "@components/FadeInOnView";

const About = () => {
  const paragraphs = personalDescription.trim().split("\n\n");
  return (
    <section id="about" className="relative w-screen bg-surface-primary">
      <div className="component-base border-b border-header-stroke/50">
        <FadeInOnView delay={100} className="w-full">
          <div className="header-texts">
            <h2>About me</h2>
            <p className="under-header">
              Every developer has a story -{" "}
              <span className="block sm:inline text-brand-green">
                here's mine.
              </span>
            </p>
          </div>
        </FadeInOnView>
        <FadeInOnView delay={200} rootMargin={mainInfoRootMargin} className="w-full">
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
                <p key={index} className="mb-6 last:mb-0 text-base xl:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeInOnView>
      </div>
    </section>
  );
};

export default About;
