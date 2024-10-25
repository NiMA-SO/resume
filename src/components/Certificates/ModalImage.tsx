import CIW from './../../assets/ciw.jpg';

interface Props{
    pName: string | undefined;
}

const ModalImage = ({pName} : Props) => {
  return (
    <div className="my-6 w-full flex justify-center">
        {pName === 'CIW' && (
          <img
            src={CIW}
            className="w-[70%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            alt={`${pName} Certificate`}
          />
        )}
      </div>
  )
}

export default ModalImage