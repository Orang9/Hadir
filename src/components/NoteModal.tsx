import { FC } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface PreviousModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NoteModal: FC<PreviousModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Examiner Notes"
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-4 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-2">Module: Communication & Networking Skills</h2>
        <div className="mb-4">
          <h3 className="font-semibold">For Trainee</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ut quia eveniet maxime deserunt maiores, quisquam iure ipsa id natus deleniti explicabo incidunt sequi excepturi, molestias dignissimos fugit! Eaque, ducimus.
          Adipisci maiores placeat voluptas beatae nobis dicta laborum ex velit? Minus eveniet dicta id adipisci laborum beatae, commodi dolore, fugiat quae eos consequatur ipsum pariatur maxime autem, iste cupiditate impedit?</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Trainer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora debitis expedita iure quo veritatis eligendi, corporis cum consequatur minima error, atque nesciunt sapiente nostrum est dolores quas quidem asperiores?
          Ipsa necessitatibus repellat iusto tempore ullam magnam ipsum nemo doloribus labore maiores facilis, quidem, sed debitis similique minima at sequi soluta hic ex. Eveniet saepe id mollitia eaque, sequi atque.</p>
        </div>
        <button onClick={onClose} className="text-blue-700 mt-4">Close</button>
      </div>
    </Modal>
  );
}

export default NoteModal;
