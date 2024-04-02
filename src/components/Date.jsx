import React from "react";
const Date = ({ onChange, name }) => {
  return (
    <div className="bg-white border-l-2 border-red-500 mt-4 px-2 pb-2">
      <label for="Event_date" class="font-mono text-base text-black">
        Event Date
      </label>
      <input
        type="date"
        id="Event_date"
        name={name}
        onChange={onChange}
        className="w-full py-2 px-5 outline-none bg-gray-100"
      />
    </div>
  );
};
export default Date;
