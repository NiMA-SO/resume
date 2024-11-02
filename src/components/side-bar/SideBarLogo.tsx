import { motion } from "framer-motion";
import profile from "./../../assets/profile3.jpg";

const SideBarLogo = () => {
  return (
    <motion.div
      className="relative w-[150px] h-[150px] mx-auto my-3 rounded-full border-4 border-[#00c49f] overflow-hidden shadow-lg"
      // animate={{
      //   scale: [1, 1.05, 1], // انیمیشن تغییر مقیاس
      // }}
      // transition={{
      //   duration: 3, // مدت زمان انیمیشن
      //   ease: "easeInOut", // نوع حرکت انیمیشن
      //   repeat: Infinity, // تکرار بی‌نهایت
      // }}
      // whileHover={{
      //   scale: 1.1, // مقیاس هنگام هاور
      // }}
      initial={{ opacity: 0 , scale: 0.5}}
      animate={{ opacity: 1 , scale: 1.05}}
      transition={{ type: "spring", stiffness: 100, damping: 30, delay: 1 }}
    >
      <img src={profile} alt="Nima Sohrabi | نیما سهرابی" className="w-full h-full object-cover" loading="lazy" />
    </motion.div>
  );
};

export default SideBarLogo;
