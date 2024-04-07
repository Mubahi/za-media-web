import React from "react";
const VideoUrl = ({ onChange, name, value, placeholder, type, min }) => {
  return (
    <div className="relative w-full">
      <input
        onChange={onChange}
        id={name}
        name={name}
        value={value}
        min={min}
        type={type}
        placeholder={placeholder}
        required
        className="text-black peer placeholder-transparent border-l-2 border-red-500 w-full py-2 px-4 focus:outline-none inputFeild"
      />
      <label
        className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
};
export default VideoUrl;
