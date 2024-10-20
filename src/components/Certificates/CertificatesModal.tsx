import { Link, useParams } from "react-router-dom";
import CIW from './../../assets/ciw.jpg';

const CertificatesModal = () => {
  const param = useParams();

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 relative max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-300 w-full">
        <h3 className="text-2xl font-bold text-gray-800">
          {param.name}
        </h3>
        <Link
          to="/Certificates"
          className="text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-800 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center transition-colors duration-200"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6m-6-6L1 13m6-6L1 1" />
          </svg>
        </Link>
      </div>

      {/* Image Display */}
      <div className="my-6 w-full flex justify-center">
        {param.name === 'CIW' && (
          <img
            src={CIW}
            className="w-[70%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            alt={`${param.name} Certificate`}
          />
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-4">
        <Link
          to="/Certificates"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Close
        </Link>
      </div>
    </div>
  );
};

export default CertificatesModal;
