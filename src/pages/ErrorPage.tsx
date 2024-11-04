import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { motion } from "framer-motion";
import Header from "../components/header/Header";
import SideBar from "../components/side-bar/SideBar";
import { useContext } from "react";
import sideBarContext from "../components/side-bar/SideBarContext";

const ErrorPage = () => {
  const { sideBar } = useContext(sideBarContext);
  return (
    <div className="grid grid-cols-6 lg:grid-cols-12 relative">
      <Header />
      <SideBar />
      <motion.main
        className={`outlet overflow-y-scroll overflow-x-hidden h-[90vh] p-4 ${
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
        <div className="w-full h-screen flex flex-col items-center  py-8 px-5 bg-white">
          <Heading text="Error Page" />
          <div className="leading-10">
            <motion.h2
              className="text-[25px] font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Oops! Something went wrong.
            </motion.h2>
            <motion.p
              className="text-[20px] "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              It seems the page you were looking for isn’t available. You can
              return to the{" "}
              <strong>
                <Link
                  to="/"
                  className="bg-blue-700 text-white px-2 py-1 rounded-md pb-2"
                >
                  Home page
                </Link>
              </strong>{" "}
              or contact us if you need further assistance.
            </motion.p>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default ErrorPage;
