import React from "react";

function DateInput({ onDateChange }) {
  return (
    <div>
      <input
        type="date"
        id="dob"
        onChange={(e) => onDateChange(e.target.value)}
      />
    </div>
  );
}

export default DateInput;
