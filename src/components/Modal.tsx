import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold">Modal Title</h2>
        <p>This is a modal example.</p>
        <button className="btn btn-primary mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
