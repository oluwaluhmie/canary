import React from "react";
import Modal from "react-modal";
import PrivacyContent from "../Pages/Privacy/PrivacyContent";

const PrivacyModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <PrivacyContent />
      <button
        onClick={onClose}
        className="flex items-center justify-center text-lg border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-32 h-11 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end"
      >
        Close
      </button>
    </Modal>
  );
};

export default PrivacyModal;
