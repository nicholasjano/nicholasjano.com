import nickImage from "../assets/nickMain.webp";
import { personalDescription } from "@data/pageData";

const About = () => {
  const paragraphs = personalDescription.trim().split("\n\n");
  return (
    <section
      id="about"
      className="relative w-screen min-h-screen flex flex-col items-center bg-surface-primary pt-24 pb-12 space-y-12"
    >
      <div className="width-scaled flex flex-col text-left space-y-2">
        <h2>About me</h2>
        <p className="under-h2">
          Every developer has a story -{" "}
          <span className="text-brand-green">here's mine.</span>
        </p>
      </div>
      <div className="width-scaled flex flex-row justify-start space-x-12">
        <img
          src={nickImage}
          alt="Photo of Nicholas Jano"
          className="w-96 h-96 object-cover object-top rounded-2xl flex-shrink-0"
        />
        <div>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
