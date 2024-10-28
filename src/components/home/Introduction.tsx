import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.section
      className="text-center mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <p className="text-lg italic text-gray-600">
        "Driven by curiosity and a dedication to seamless design, I specialize
        in building responsive, visually appealing websites."
      </p>
      <p className="mt-4 text-gray-700">
        Currently diving deeper into advanced JavaScript and refining my skills
        in UI/UX design.
      </p>
    </motion.section>
  );
};

export default Introduction;
