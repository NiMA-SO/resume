import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-8 mt-11">
        Featured Projects
      </h2>
      <div className="flex justify-center gap-8 ">
        <ProjectCard
          title="Movie Hub 🎬"
          description="Dive into the world of cinema! This project features trending movies, ratings, and engaging content for movie lovers."
          link="https://movie-hub-cyan.vercel.app/"
        />
        {/* Add more ProjectCards as needed */}
      </div>
    </motion.section>
  );
};

export default Projects;
