import { motion } from "framer-motion";
import profile from "./../../assets/profile.jpg";

const SideBarLogo = () => {
  return (
    <motion.div
      className="relative w-[150px] lg:w-[80%] mx-auto my-3 rounded-full border-4 border-[#00c49f] overflow-hidden shadow-lg"
      animate={{
        scale: [1, 1.05, 1], // انیمیشن تغییر مقیاس
      }}
      transition={{
        duration: 3, // مدت زمان انیمیشن
        ease: "easeInOut", // نوع حرکت انیمیشن
        repeat: Infinity, // تکرار بی‌نهایت
      }}
      whileHover={{
        scale: 1.1, // مقیاس هنگام هاور
      }}
    >
      <img src={profile} alt="Nima Sohrabi | نیما سهرابی" className="w-full h-full object-cover" loading="lazy" />
    </motion.div>
  );
};

export default SideBarLogo;
