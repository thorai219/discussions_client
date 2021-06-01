const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input onChange={handleChange} {...props} />
    </div>
  );
};

export default FormInput;
