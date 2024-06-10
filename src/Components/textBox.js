import React from 'react';

const TextBox = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-textboxBorder px-3 py-3 text-searchBoxText w-full h-11"
    />
  );
};

export default TextBox;
