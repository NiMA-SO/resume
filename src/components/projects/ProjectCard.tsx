import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface PropsDetail {
  title: string;
  description: string;
  link: string;
  img: string;
  src: string;
}
interface Props {
  details: PropsDetail[];
}
const ProjectCard = ({ details }: Props) => {
  return (
    <>
      {details.map((project, index) => (
        <motion.div
          className="relative w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden border"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          key={index}
        >
          <Link to={`/Projects/${project.src}`} rel="noopener noreferrer">
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="absolute bottom-4 right-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCard;
