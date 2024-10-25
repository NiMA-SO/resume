import { useContext } from "react";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import sideBarContext from "../side-bar/SideBarContext";

const HeaderSideBarBtn = () => {
  const { sideBar, dispatch } = useContext(sideBarContext);
  return (
    <button
      onClick={() => dispatch({ type: sideBar ? false : true })}
      className="block lg:hidden text-2xl"
    >
      {sideBar ? <IoMdClose /> : <BsLayoutTextSidebar />}
    </button>
  );
};

export default HeaderSideBarBtn;
