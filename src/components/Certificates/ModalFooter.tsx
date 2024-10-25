import { Link } from "react-router-dom";

const ModalFooter = () => {
  return (
    <div className="flex justify-end mt-4">
      <Link
        to="/Certificates"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
      >
        Close
      </Link>
    </div>
  );
};

export default ModalFooter;
