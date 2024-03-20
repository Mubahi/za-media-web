const SelectField = (props) => {
  const { id, options } = props;
  return (
    <select
      id={id}
      className="text-black mt-4 bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} className="bg-yellow-100">
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default SelectField;
