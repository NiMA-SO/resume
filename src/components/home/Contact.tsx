import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="text-center mt-12"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 }}
    >
      <a
        href="/Contact"
        className="bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
      >
        Get in Touch for "contact" me
      </a>
    </motion.section>
  );
};

export default Contact;
