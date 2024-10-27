import CertificatesBody from "../components/Certificates/CertificatesBody";
import Heading from "../components/Heading";
import Seo from "../components/Seo";

const Certificates = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
       <Seo
        title="Certificates"
        description="گواهینامه‌ها و مدارک حرفه‌ای نیما سهرابی در توسعه وب."
        canonical="certificates"
      />
      <Heading text="Certificates" />
      <CertificatesBody />
    </div>
  );
};

export default Certificates;
