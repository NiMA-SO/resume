import { useParams } from "react-router-dom";
import HeaderIframe from "../components/projects/HeaderIframe";
import Iframe from "../components/projects/Iframe";
import IframeBody from "../components/projects/IframeBody";

const IframeProjects = () => {
  const param = useParams();

  return (
    <div className="w-full flex flex-col items-center justify-center  bg-white ">
      <HeaderIframe param={param.name} />
      <IframeBody />
      <Iframe param={param.name} />
    </div>
  );
};

export default IframeProjects;
