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
        description="درباره نیما سهرابی، توسعه‌دهنده فرانت‌اند و متخصص طراحی رابط کاربری."
        canonical="about"
      />
      <Heading text="About Me" />
      <AboutParagraph />
      <h2 className="mt-[30px] text-[20px]"><strong>Skill Progress Over Time</strong></h2>
      <AboutChartSkills />
      <h2 className="mt-[30px] text-[20px]"><strong>Weekly Study & Project Hours</strong></h2>
      <AboutChartTimes />
    </div>
  );
};

export default AboutMe;
