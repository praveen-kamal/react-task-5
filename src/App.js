import React, { useState } from "react";
import "./App.css";
import DateInput from "./components/DateInput";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    if (dob) {
      const birthDate = new Date(dob);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      setAge(age);
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <DateInput onDateChange={(date) => setDob(date)} />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <h2>You are {age} years old.</h2>}
    </div>
  );
}

export default App;
