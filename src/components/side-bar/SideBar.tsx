import { useContext } from "react";
import sideBarContext from "./SideBarContext";
import SideBarMenu from "./SideBarMenu";
import SideBarLogo from "./SideBarLogo";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
const SideBar = () => {
  const { sideBar } = useContext(sideBarContext);

  const isMobile = useMediaQuery({ query: "(min-width: 1024px)" });



  return (
    <motion.aside
      id="slideBar"
      className={`${
        sideBar ? "block" : "hidden"
      } lg:block col-span-6 lg:col-span-2 overflow-y-scroll h-[90vh] border-r-4 border-t border-[#f8f9fa]  bg-[#ffffff] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]`}
      initial={{ y: "-100%" }} // موقعیت اولیه سایدبار خارج از صفحه
      animate={!isMobile ? { y: sideBar ? "0%" : "-100%" } : {y: "0%"}} // تغییر موقعیت بر اساس باز یا بسته بودن
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 6,
      }}
    >
      <SideBarLogo />
      <SideBarMenu />
    </motion.aside>
  );
};

export default SideBar;
