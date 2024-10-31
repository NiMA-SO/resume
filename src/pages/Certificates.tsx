import CertificatesBody from "../components/Certificates/CertificatesBody";
import Heading from "../components/Heading";
import Seo from "../components/Seo";

const Certificates = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
       <Seo
        title="Certificates"
        description="Explore the professional certifications and achievements of Nima Sohrabi, showcasing expertise in front-end development, web technologies, and more."
        canonical="certificates"
        keywords="Nima Sohrabi Certificates, گواهی‌نامه‌های نیما سهرابی, Nima Sohrabi Certifications, Web Development Certifications Nima Sohrabi, HTML CSS JavaScript Certification Nima Sohrabi, CIW Certificate, Nima Sohrabi Front-End Developer Certification"
      />
      <Heading text="My Certificates" />
      <CertificatesBody />
    </div>
  );
};

export default Certificates;
