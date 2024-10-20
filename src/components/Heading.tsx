import { motion } from "framer-motion";

interface Props {
  text: string;
}

const Heading = ({ text }: Props) => {
  return (
    <motion.h2
      className="text-4xl w-[80%] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-6 relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span>{text}</span>
      <span className="before:bg-gradient-to-r before:from-purple-400 before:via-pink-500 before:to-red-500 before:absolute before:left-0 before:top-1/2 before:w-[20%] before:h-[2px] before:opacity-80 after:bg-gradient-to-r after:from-purple-400 after:via-pink-500 after:to-red-500 after:absolute after:right-0 after:top-1/2 after:w-[20%] after:h-[2px] after:opacity-80"></span>
      </motion.h2>
  );
};

export default Heading;
