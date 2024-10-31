import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

interface Props {
  param: string | undefined;
}
const HeaderIframe = ({ param }: Props) => {
  const name = [
    "game-hub-three-iota-70.vercel.app",
    "movie-hub-cyan.vercel.app",
  ];


  return (
    <div className="flex justify-around w-full bg-[#dadada] my-5 py-2">
      <h2 className="text-[25px]">
        {param == name[0] ? "Game Hub" : param == name[1] ? "Movie Hub" : ""}
      </h2>
      <Link
        className="bg-[#00c49f] text-white rounded-xl p-2 "
        to={"/Projects"}
      >
        <CgClose className="text-[20px]" />
      </Link>
    </div>
  );
};

export default HeaderIframe;
