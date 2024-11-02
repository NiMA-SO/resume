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
          className="relative  min-w-[250px] mx-auto rounded-lg shadow-lg overflow-hidden border"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 6 }}
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
            <div className="p-4 bg-white grid grid-cols-2 gap-5 text-gray-800 ">
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 break-words">
                  {project.description}
                </p>
              </div>
              <div className="flex items-end w-full col-span-2 md:col-span-1">
                <button className="bg-blue-500 hover:bg-blue-600 text-white w-full h-[40px] py-2 px-4 mb-4 rounded-lg shadow-md transition-all duration-300">
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
