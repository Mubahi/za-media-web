const SelectField = (props) => {
  const { name, id, options, labelKey, valueKey, onChange, value } = props;
  return (
    <select
      id={id}
      name={name}
      onChange={onChange}
      value={value ? value : ""}
      className="text-black mt-4 bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={valueKey ? option[valueKey] : option.value}
          className="bg-yellow-100"
        >
          {labelKey ? option[labelKey] : option.label}
        </option>
      ))}
    </select>
  );
};
export default SelectField;
