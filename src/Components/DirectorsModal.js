import React, { useEffect } from "react";

const DirectorsModal = ({ isOpen, onClose, director }) => {
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on the main page
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on the main page
      document.body.style.overflow = "";
    }

    // Cleanup when the component is unmounted or isOpen changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 max-h-full lg:max-h-3/4 overflow-y-auto">
        {/* Modal header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <p className="font-gotham text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
            {director.name}
          </p>
        </div>
        {/* Modal content */}
        <div className="px-6 py-4 md:py-6 lg:py-8">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            {director.details}
          </p>
        </div>
        {/* Modal footer */}
        <div className="bg-gray-100 px-6 py-4 flex justify-end">
          <button
            className="flex items-center justify-center text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-24 h-11 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectorsModal;
