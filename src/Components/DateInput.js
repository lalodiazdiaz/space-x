import React from "react";

const DateInput = ({ onChange, label }) => {
  return (
    <div className="date-input">
      <label>{label}</label>
      <br />
      <input type="date" onChange={onChange} />
      <br />
    </div>
  );
};

export default DateInput;
