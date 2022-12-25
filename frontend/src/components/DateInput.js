const DateInput = ({ labelText, name, value, handleChange, min, max }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type="date"
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        className="form-select"
      />
    </div>
  );
};

export default DateInput;
