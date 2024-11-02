import { useMediaQuery } from "react-responsive";
import HeaderSideBarBtn from "./HeaderSideBarBtn";
import HeaderSkills from "./HeaderSkills";
import HeaderSocial from "./HeaderSocial";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });
  const isMobileSocial = useMediaQuery({ query: "(min-width: 740px)" });
  return (
    <header className="col-span-6 flex justify-between px-2 md:px-8 items-center self-start md:col-span-12 sticky top-0 h-[90px] z-20 bg-[#ffffff] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
      <HeaderTitle />
      {isMobile && <HeaderSkills />}
      {isMobileSocial && <HeaderSocial />}
      <HeaderSideBarBtn />
    </header>
  );
};

export default Header;
