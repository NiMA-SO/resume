import Heading from "../components/Heading"
import SkillBarChart from "../components/skills/SkillBarChart"


const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Heading text="My Skills"/>
      <SkillBarChart />
    </div>
  )
}

export default Skills