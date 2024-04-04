import React from "react";
const Date = ({ onChange, name, label, readOnly }) => {
  return (
    <div className="bg-white border-l-2 border-red-500 mt-4 px-2 pb-2">
      <label for="Event_date" class="font-mono text-base text-black">
        {label}
      </label>
      <input
        type="date"
        name={name}
        onChange={onChange}
        readOnly={readOnly}
        className="w-full py-2 px-5 outline-none bg-gray-100"
      />
    </div>
  );
};
export default Date;
