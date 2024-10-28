import { motion } from "framer-motion";

interface Props {
  icon: string;
  skill: string;
}
const SkillCard = ({ icon, skill }: Props) => {
  return (
    <motion.div
      className="text-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <span className="text-5xl">{icon}</span>
      <p className="text-gray-700 mt-2 font-semibold">{skill}</p>
    </motion.div>
  );
};

export default SkillCard;
