import { useParams } from "react-router-dom";
import ModalFooter from "./ModalFooter";
import ModalImage from "./ModalImage";
import ModalHeader from "./ModalHeader";

const CertificatesModal = () => {
  const param = useParams();

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 relative max-w-3xl mx-auto">
      {/* Header */}
      <ModalHeader pName={param.name} />

      {/* Image Display */}
      <ModalImage pName={param.name} />

      {/* Footer */}
      <ModalFooter />
    </div>
  );
};

export default CertificatesModal;
