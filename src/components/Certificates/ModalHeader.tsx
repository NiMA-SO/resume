import { Link } from "react-router-dom";


interface Props{
    pName: string | undefined;
}


const ModalHeader = ({pName} : Props) => {
  return (
    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-300 w-full">
      <h3 className="text-2xl font-bold text-gray-800">{pName}</h3>
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l6 6m0 0l6 6m-6-6L1 13m6-6L1 1"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ModalHeader;
