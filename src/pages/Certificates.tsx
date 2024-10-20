import CertificatesBody from "../components/Certificates/CertificatesBody";
import Heading from "../components/Heading";

const Certificates = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Heading text="My Certificates" />
      <CertificatesBody />
    </div>
  );
};

export default Certificates;
