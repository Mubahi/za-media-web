const FormButton = ({ onClick, value, width, className }) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        value="button"
        style={{ width: width }} // Set the width dynamically using inline styles
        className={`border-2 border-green-500 bg-green-500 text-white py-1 rounded-md hover:bg-green-600 hover:text-white hover:border-green-600 transition duration-700 font-base font-bold mt-3 flex justify-center items-center ${
          className ? className : ""
        }`}
      >
        {value}
      </button>
    </div>
  );
};

export default FormButton;
