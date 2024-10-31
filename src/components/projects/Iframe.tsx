import { useState } from "react";
import { ImTablet } from "react-icons/im";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";

interface Props {
  param: string | undefined;
}
const Iframe = ({ param }: Props) => {
  const [isFrame, setFrame] = useState(420);
  return (
    <div className="w-full h-[1050px]">
      <div className=" justify-around items-center border-8 hidden 2xl:flex w-[1400px] mx-auto py-6 text-[40px] gap-8">
        <div>
          <button
            onClick={() => setFrame(420)}
            className={`${isFrame == 420 && "text-[#00c49f]"}`}
          >
            <IoPhonePortraitSharp />
          </button>
          <button
            onClick={() => setFrame(768)}
            className={`${isFrame == 768 && "text-[#00c49f]"}`}
          >
            <ImTablet />
          </button>
          <button
            onClick={() => setFrame(1400)}
            className={`${isFrame == 1400 && "text-[#00c49f]"}`}
          >
            <MdLaptopChromebook />
          </button>
        </div>
        <span className="text-[24px]">{isFrame}px</span>
      </div>
      <div className="w-full 2xl:w-[1400px] h-[920px] border-8 rounded-b-xl  2xl:p-2 flex mx-auto">
        <iframe
          src={`https://${param}`}
          className={` h-full border-2 rounded-xl self-start mx-auto border-[#00c49f]`}
          width={`${isFrame}px`}
        />
      </div>
    </div>
  );
};

export default Iframe;
