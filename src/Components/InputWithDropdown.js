import React from "react";

const InputWithDropdown = ({
  labelName,
  options,
  selectedValue,
  onChange,
  inputError,
}) => {
  const selectedStyle = {
    color: selectedValue ? "#DD6C38" : "#606062", // replace with desired color
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-mobileMenuColor text-base">{labelName}</span>
      <select
        value={selectedValue}
        onChange={onChange}
        className="h-11 border border-textboxBorder text-searchBoxText px-3 py-2 self-stretch"
        style={selectedStyle}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {inputError && <p className="text-red-500 text-xs">{inputError}</p>}
    </div>
  );
};

export default InputWithDropdown;
