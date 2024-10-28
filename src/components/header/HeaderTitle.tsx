import logo from "./../../assets/logo.png";

const HeaderTitle = () => {
  return (
    <div className="gap-2 flex justify-between items-center ">
      <img
        src={logo}
        className="h-[70px]"
        alt="لوگو نیما سهرابی | Nima Sohrabi Logo"
        loading="lazy"
      />
      <strong className="font-bold -tracking-tighter text-[25px]">NiMA SOHRABI</strong>
    </div>
  );
};

export default HeaderTitle;
