import React from "react";
const PageSubHeading = ({ title }) => {
  return (
    <>
      <h1 className="text-xl font-bold text-[#FF7D31] mt-2">{title}</h1>
      <div className="border-b border-orange-500 rounded-md mx-auto"></div>
    </>
  );
};
export default PageSubHeading;
