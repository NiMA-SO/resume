import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  link: string;
}
const ProjectCard = ({ title, description, link }: Props) => {
  return (
    <motion.div
      className="bg-white shadow-lg p-6 rounded-lg transition hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a
        href={link}
        target="_blank"
        className="inline-block text-blue-500 font-medium mt-4 hover:underline"
      >
        View Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;
