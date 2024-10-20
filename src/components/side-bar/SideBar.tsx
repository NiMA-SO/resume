import { useContext } from "react";
import sideBarContext from "./SideBarContext";
import SideBarMenu from "./SideBarMenu";
import profile from './../../assets/profile.jpg'

const SideBar = () => {
    const { sideBar } = useContext(sideBarContext)
    
  return (
    <aside className={`${sideBar ? 'block' : 'hidden'} lg:block col-span-6 md:col-span-2 border-r-4 border-t border-[#f8f9fa] h-[90vh] bg-[#ffffff] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]`}>
      <img src={profile} alt="" className="rounded-full w-[80%] mx-auto my-3 border-4 border-[#007BFF]" />
      <SideBarMenu />
    </aside>
  );
};

export default SideBar;
