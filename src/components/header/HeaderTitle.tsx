import { motion } from "framer-motion";
import logo from "./../../assets/logo.png";

const HeaderTitle = () => {
  return (
    <div className="gap-2 flex justify-between items-center ">
      <motion.img
        src={logo}
        className="h-[70px]"
        alt="لوگو نیما سهرابی | Nima Sohrabi Logo"
        loading="lazy"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0.2 }}
      />
      <motion.strong
        className="font-bold -tracking-tighter text-[25px]"
        initial={{ opacity: 0, fontSize: "5px" }}
        animate={{ opacity: 1, fontSize: "25px" }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 3,
          delay: 1,
        }}
      >
        NiMA SOHRABI
      </motion.strong>
    </div>
  );
};

export default HeaderTitle;
