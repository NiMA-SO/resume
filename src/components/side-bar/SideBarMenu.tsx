import { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoIosArrowForward, IoIosContact } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import sideBarContext from "./SideBarContext";
import { motion } from "framer-motion";

const SideBarMenu = () => {
  const data = [
    { id: 1, title: "Home", path: "/", icon: <FaHome className="text-2xl" /> },
    {
      id: 2,
      title: "About Me",
      path: "/About",
      icon: <TbListDetails className="text-2xl" />,
    },
    {
      id: 3,
      title: "Skills",
      path: "/Skills",
      icon: <GiSkills className="text-2xl" />,
    },
    {
      id: 4,
      title: "Projects",
      path: "/Projects",
      icon: <GrProjects className="text-2xl" />,
    },
    {
      id: 5,
      title: "Certificates",
      path: "/Certificates",
      icon: <LiaCertificateSolid className="text-2xl" />,
    },
    {
      id: 6,
      title: "Contact",
      path: "/Contact",
      icon: <IoIosContact className="text-2xl" />,
    },
  ];
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(location.pathname);
  }, [url]);

  const { dispatch } = useContext(sideBarContext);

  return (
    <nav className="">
      <ul className="flex flex-col items-center gap-4 py-4 px-2">
        {data.map((item) => (
          <motion.li
            key={item.id}
            onClick={() => {
              setUrl(item.path);
              dispatch({ type: false });
            }}
            className="w-full"
            initial={{ opacity: 0, scale  : 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 8,
              delay: 1,
            }}
          >
            <Link
              className={`w-full py-3 px-2 flex justify-between items-center ${
                item.path == "/" + url.charAt(1).toUpperCase() + url.slice(2)
                  ? "bg-[#00c49f] text-[#FFFFFF]"
                  : "bg-[#f8f9fa] hover:text-[#FFFFFF] text-[#2D2D2D]"
              }  border border-[#00c49f] hover:bg-[#00c49f]  font-semibold cursor-pointer rounded-xl duration-200 `}
              to={item.path}
            >
              <span className="flex items-center gap-2">
                {item.icon} {item.title}
              </span>
              <IoIosArrowForward />
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBarMenu;
