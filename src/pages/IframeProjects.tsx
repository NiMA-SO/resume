import { CgClose } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";

const IframeProjects = () => {
  const param = useParams();

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white h-screen">
      <div className="flex justify-between bg-[#00c49f] text-white rounded-xl p-2 self-end mx-12">
        <Link className="" to={'/Projects'}><CgClose className="text-[20px]"/></Link>
      </div>
      <iframe
        src={`https://${param.name}`}
        className="w-[40%] h-full border-4 rounded-xl self-start mx-12 border-[#00c49f]"
      />
    </div>
  );
};

export default IframeProjects;
