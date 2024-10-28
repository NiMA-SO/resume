import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <motion.section
      className="text-center mt-11"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Core Skills</h2>
      <div className="flex justify-center flex-wrap gap-8">
        <SkillCard icon="💻" skill="HTML & CSS" />
        <SkillCard icon="⚙️" skill="JavaScript" />
        <SkillCard icon="🎨" skill="Responsive Design" />
        <SkillCard icon="⚛️" skill="React" />
        <SkillCard icon="🌐" skill="APIs & RESTful Services" />
        <SkillCard icon="🔧" skill="TypeScript" />
        <SkillCard icon="🚀" skill="Next.js" />
        <SkillCard icon="📦" skill="NPM & Yarn" />
        <SkillCard icon="📝" skill="WordPress" />
      </div>
    </motion.section>
  );
};

export default Skills;
