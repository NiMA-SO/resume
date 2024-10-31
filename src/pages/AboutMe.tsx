import AboutChartSkills from "../components/about/AboutChartSkills";
import AboutChartTimes from "../components/about/AboutChartTimes";
import AboutParagraph from "../components/about/AboutParagraph";
import Heading from "../components/Heading";
import Seo from "../components/Seo";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Seo
        title="About Me"
        description="Get to know Nima Sohrabi, a passionate front-end developer with a journey in web development, professional goals, and a love for technology and learning."
        canonical="about"
        keywords="About Nima Sohrabi, درباره نیما سهرابی, Nima Sohrabi Front-End Developer, Career Nima Sohrabi, Biography Nima Sohrabi, Skills Nima Sohrabi, Web Development Background Nima Sohrabi, نیما سهرابی توسعه‌دهنده فرانت‌اند"
      />
      <Heading text="About Me" />
      <AboutParagraph />
      <h2 className="mt-[30px] text-[20px]">
        <strong>Skill Progress Over Time</strong>
      </h2>
      <AboutChartSkills />
      <h2 className="mt-[30px] text-[20px]">
        <strong>Weekly Study & Project Hours</strong>
      </h2>
      <AboutChartTimes />
    </div>
  );
};

export default AboutMe;
