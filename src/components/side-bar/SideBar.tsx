import { useContext } from "react";
import sideBarContext from "./SideBarContext";
import SideBarMenu from "./SideBarMenu";
import SideBarLogo from "./SideBarLogo";
import { motion } from "framer-motion";
const SideBar = () => {
  const { sideBar } = useContext(sideBarContext);

  return (
    <motion.aside
      className={`${
        sideBar ? "block" : "hidden"
      } lg:block col-span-6 lg:col-span-2 border-r-4 border-t border-[#f8f9fa]  bg-[#ffffff] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]`}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 3,
        delay: 0.5,
      }}
    >
      <SideBarLogo />
      <SideBarMenu />
    </motion.aside>
  );
};

export default SideBar;
