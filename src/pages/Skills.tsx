import Heading from "../components/Heading";
import Seo from "../components/Seo";
import SkillBarChart from "../components/skills/SkillBarChart";
import SkillPieChart from "../components/skills/SkillPieChart";

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Seo
        title="Skills"
        description="Explore my web development skills, including HTML, CSS, JavaScript, React, and other front-end tools. Discover my expertise and experience in creating responsive, dynamic web applications."
        canonical="skills"
        keywords="Nima Sohrabi Skills, مهارت‌های نیما سهرابی, Front-End Skills Nima Sohrabi, React Skills Nima Sohrabi, HTML CSS JavaScript Nima Sohrabi, Responsive Design, Tailwind CSS, Chakra UI, Nima Sohrabi Web Developer"
      />
      <Heading text="My Skills" />
      <SkillBarChart />
      <SkillPieChart />
    </div>
  );
};

export default Skills;
