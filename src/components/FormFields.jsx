const FormFields = ({ onChange, name, value, placeholder, className }) => {
  return (
    <div className={`relative ${className} mt-5 `}>
      <input
        onChange={onChange}
        id={name}
        name={name}
        value={value}
        type="text"
        placeholder={placeholder}
        required
        className="text-black peer placeholder-transparent bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"
      />
      <label
        className="text-black font-mono peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm absolute left-2 -top-5 cursor-text transition-all"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
};
export default FormFields;
