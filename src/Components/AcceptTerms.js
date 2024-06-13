import React, { useState } from "react";
import { Link } from "react-router-dom";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";

const AcceptTerms = ({ formData, label, checked, onChange }) => {
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);

  const openTermsModal = () => {
    setTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setTermsModalOpen(false);
  };

  const openPrivacyModal = () => {
    setPrivacyModalOpen(true);
  };

  const closePrivacyModal = () => {
    setPrivacyModalOpen(false);
  };

  const handleCheckboxClick = (e) => {
    const newValue = e.target.checked;
    onChange(newValue); // Invoke the onChange callback
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onClick={handleCheckboxClick}
          className="mr-2 mt-6"
        />
        {label}
        {" I/We agree to be bound to the "}
        <Link
          className="text-menuHover underline underline-offset-2"
          onClick={openTermsModal}
        >
          Terms of Use
        </Link>
        {" and "}
        <Link
          className="text-menuHover underline underline-offset-2"
          onClick={openPrivacyModal}
        >
          Privacy Policy
        </Link>
      </label>
      {/* Terms of Use Modal */}
      <TermsModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
      {/* Privacy Policy Modal */}
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
    </div>
  );
};

export default AcceptTerms;
