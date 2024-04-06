import React from "react";
const VideoUrl = ({ onChange, name, value, placeholder, type, min }) => {
  return (
    <div className="flex items-center bg-orange-50 pr-1">
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-plus-circle ml-1 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-2 hover:border-orange-500 transition-colors duration-700 rounded-full"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
      </svg>
    </div>
  );
};
export default VideoUrl;
