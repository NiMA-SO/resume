import { Outlet } from "react-router-dom";
import SideBar from "../components/side-bar/SideBar";
import Header from "../components/header/Header";
import { useContext } from "react";
import sideBarContext from "../components/side-bar/SideBarContext";
import { motion } from "framer-motion";

const Layout = () => {
  const { sideBar } = useContext(sideBarContext);
  return (
    <div className="grid grid-cols-6 lg:grid-cols-12 relative">
      <Header />
      <SideBar />
      <motion.main
        className={`outlet overflow-y-scroll h-[90vh] p-4 ${
          sideBar ? "hidden" : "block"
        } col-span-6 lg:col-span-10 `}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          delay: 0.5,
        }}
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default Layout;
