import { useEffect, useState, useRef } from 'react';
import ReactModal from 'react-modal';

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  setIsOpen: () => void;
}

export function Modal({ isOpen, children, setIsOpen }: Props) {  
  const [modalStatus, setModalStatus] = useState(isOpen);

  const prevModaltRef = useRef<boolean>();

  useEffect(() => {
    prevModaltRef.current = isOpen;
  });

  const modalPreviousValue = prevModaltRef.current ?? modalStatus;

  useEffect(() => {
    if (modalPreviousValue !== isOpen) {
      setModalStatus(isOpen);
    }
  }, [modalPreviousValue, isOpen]);
  
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );  
};
