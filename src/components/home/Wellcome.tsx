import { motion } from "framer-motion";

const Wellcome = () => {
  return (
    <motion.section
    className="text-center space-y-4"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.h1
      className="text-4xl font-bold text-blue-700 mt-6"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to My Personal Website! 👋
    </motion.h1>
    <motion.p
      className="text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Discover my journey, skills, and projects as a passionate front-end developer. I’m here to bring dynamic, interactive web experiences to life. Explore and reach out with any questions—I’d love to connect!
    </motion.p>
  </motion.section>
  );
};

export default Wellcome;
