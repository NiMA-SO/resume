import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoIosArrowForward, IoIosContact } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideBarMenu = () => {
  const data = [
    { id: 1, title: "Home", path: "/",icon: <FaHome  className="text-2xl" /> },
    { id: 2, title: "About Me", path: "/AboutMe",icon: <TbListDetails  className="text-2xl" /> },
    { id: 3, title: "Skills", path: "/Skills",icon: <GiSkills  className="text-2xl" /> },
    { id: 4, title: "Projects", path: "/Projects",icon: <GrProjects className="text-2xl" /> },
    { id: 5, title: "Certificates", path: "/Certificates",icon: <LiaCertificateSolid  className="text-2xl" /> },
    { id: 6, title: "Contact", path: "/Contact" , icon: <IoIosContact className="text-2xl" />},
  ];
  const [url,setUrl] = useState("")
  useEffect(() => {
      setUrl(location.pathname)
  }, [url])

  return (
    <ul className="flex flex-col gap-4 py-4 px-2">
      {data.map((item) => (
        <Link to={item.path} onClick={() => setUrl(item.path)}>
          <li
            className={`w-full py-3 px-2 flex justify-between items-center ${
              item.path == url
                ? "bg-[#007BFF] text-[#FFFFFF]"
                : "bg-[#f8f9fa] hover:text-[#FFFFFF] text-[#2D2D2D]"
            }  border border-[#007BFF] hover:bg-[#007BFF]  font-semibold cursor-pointer rounded-xl duration-200 `}
          >
            <span className="flex items-center gap-2">{item.icon} {item.title}</span>
            <IoIosArrowForward />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SideBarMenu;
