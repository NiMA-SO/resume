import { useContext } from "react";
import sideBarContext from "./SideBarContext";
import SideBarMenu from "./SideBarMenu";
import profile from "./../../assets/profile.jpg";
import { motion } from "framer-motion";

const SideBar = () => {
  const { sideBar } = useContext(sideBarContext);

  return (
    <aside
      className={`${
        sideBar ? "block" : "hidden"
      } lg:block col-span-6 md:col-span-2 border-r-4 border-t border-[#f8f9fa] h-[90vh] bg-[#ffffff] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]`}
    >
     <motion.div
      className="relative w-[80%] mx-auto my-3 rounded-full border-4 border-[#00c49f] overflow-hidden shadow-lg"
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
      <img
        src={profile}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </motion.div>
      <SideBarMenu />
    </aside>
  );
};

export default SideBar;
