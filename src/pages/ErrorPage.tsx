import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
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
          It seems the page you were looking for isn’t available. You can return
          to the{" "}
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
  );
};

export default ErrorPage;
