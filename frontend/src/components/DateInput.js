const DateInput = ({ labelText, name, value, handleChange, min, max }) => {
  const valueAsDate = value
    ? new Date(value).toISOString().substring(0, 10)
    : "";
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type="date"
        name={name}
        value={valueAsDate}
        min={min}
        max={max}
        onChange={handleChange}
        className="form-select"
      />
    </div>
  );
};

export default DateInput;
