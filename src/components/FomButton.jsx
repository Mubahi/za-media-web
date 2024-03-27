const FormButton = ({ onClick, Title }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="border-2 border-yellow-500 bg-yellow-500 text-black py-1 w-full rounded-md hover:bg-orange-500 hover:text-black hover:border-orange-500 transition duration-300 font-semibold roboto-mono flex justify-center items-center mt-3"
      >
        {Title}
      </button>
    </>
  );
};
export default FormButton;
