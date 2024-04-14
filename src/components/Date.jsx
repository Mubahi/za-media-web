import React from "react";
const Date = ({ onChange, name, label, readOnly }) => {
  return (
    <div className="bg-white border-l-2 border-red-500 mt-4 px-2 pb-1">
      <label htmlFor="Event_date" className="font-mono text-sm text-black">
        {label}
      </label>
      <input
        type="date"
        name={name}
        onChange={onChange}
        readOnly={readOnly}
        className="w-full px-5 outline-none bg-gray-100"
      />
    </div>
  );
};
export default Date;
