// components/Modal.tsx
import React, { useRef, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;  // Accept children (BookingModal content)
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">×</button>
        {children}  {/* This will render the BookingModal here */}
      </div>
    </dialog>
  );
};

export default Modal;
