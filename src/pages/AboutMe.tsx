import Heading from "../components/Heading";
import Seo from "../components/Seo";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Seo
        title="About Me"
        description="درباره نیما سهرابی، توسعه‌دهنده فرانت‌اند و متخصص طراحی رابط کاربری."
        canonical="about"
      />
      <Heading text="About Me" />
    </div>
  );
};

export default AboutMe;
