import CertificatesItem from "./CertificatesItem";



// داده‌های گواهی‌نامه‌ها
const certificates = [
  {
    title: "Certified Internet Webmaster (CIW)",
    date: "2023-06",
    issuer: "CIW Institute",
    link: "/Certificates/CIW",
  },
  {
    title: "Front-End Developer Certification",
    date: "2022-11",
    issuer: "Udemy",
    link: "/Certificates/front",
  },
  {
    title: "React & TypeScript Masterclass",
    date: "2023-08",
    issuer: "Coursera",
    link: "/Certificates/react&ts",
  },
];

const CertificatesBody = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-gray-100">
      <CertificatesItem certificates={certificates} />
    </div>
  );
};

export default CertificatesBody;
