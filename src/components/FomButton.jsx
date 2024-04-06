const FormButton = ({ onClick, value, width }) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        value="button"
        style={{ width: width }} // Set the width dynamically using inline styles
        className="border-2 border-orange-500 bg-orange-500 text-white py-1 rounded-md hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-700 font-base font-bold mt-3"
      >
        {value}
      </button>
    </div>
  );
};

export default FormButton;
