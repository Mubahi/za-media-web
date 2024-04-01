const FormButton = ({ onClick, Title }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="border-2 border-orange-500 bg-orange-500 text-white py-1 w-full rounded-md hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-700 font-base font-bold flex justify-center items-center mt-3"
      >
        {Title}
      </button>
    </>
  );
};
export default FormButton;
