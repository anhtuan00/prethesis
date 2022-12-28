const FormRowComment = ({ name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        className="form-textarea"
        rows={3}
        wrap="hard"
      />
    </div>
  );
};

export default FormRowComment;
