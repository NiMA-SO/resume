import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  certificates: Certificate[];
}

interface Certificate {
  title: string;
  date: string;
  issuer: string;
  link?: string; // لینک گواهی‌نامه
}
const CertificatesItem = ({ certificates }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          className="bg-white cursor-pointer p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
          <p className="text-gray-600 mb-2">Issued by: {cert.issuer}</p>
          <p className="text-gray-500 text-sm">Date: {cert.date}</p>
          {cert.link && (
            <Link
              to={cert.link}
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 mt-4 block font-medium transition-colors duration-200"
            >
              View Certificate
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CertificatesItem;
