import Heading from "../components/Heading";
import Seo from "../components/Seo";
import SkillBarChart from "../components/skills/SkillBarChart";
import SkillPieChart from "../components/skills/SkillPieChart";

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Seo
        title="Skills"
        description="مهارت‌ها و تخصص‌های نیما سهرابی در حوزه توسعه فرانت‌اند و طراحی رابط کاربری."
        canonical="skills"
      />
      <Heading text="My Skills" />
      <SkillBarChart />
      <SkillPieChart />
    </div>
  );
};

export default Skills;
