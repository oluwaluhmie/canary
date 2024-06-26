import React from "react";

const InputWithLabel = ({
  labelName,
  inputType,
  placeholder,
  inputValue,
  inputOnChange,
  InputError,
  inputName,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-mobileMenuColor text-base">{labelName}</label>
      {inputType === "textarea" ? (
        <textarea
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
          onChange={inputOnChange}
          className="h-24 border border-textboxBorder text-menuHover px-3 py-2 self-stretch resize-none"
        />
      ) : (
        <input
          type={inputType}
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
          onChange={inputOnChange}
          className="h-11 border border-textboxBorder text-menuHover px-3 py-2 self-stretch"
        />
      )}
      {InputError && <code className="text-red-500 text-xs">{InputError}</code>}
    </div>
  );
};

export default InputWithLabel;
