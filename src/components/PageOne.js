import React, { useState, useContext } from "react";
import { FormContext } from "./FormComponent";

const inititalData = {
  name: "",
  email: "",
  dob: "",
};

const PageOne = () => {
  const { value, setValue, nextPage } = useContext(FormContext);
  const [inputValue, setInputValue] = useState(inititalData);
  const [error, setError] = useState(inititalData);

  const handleError = () => {
    
  }

  const handelNext = () => {
    setValue({
      ...value,
      ...inputValue,
    });
    nextPage();
  };

  const handlePrev = () => {
    setValue({
      ...value,
      ...inputValue,
    });
  }

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [key]: value });
  };

  return (
    <div>
      <h1>Page 1</h1>
      <input
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={inputValue.name}
      />
      <input
        placeholder="Email"
        name="email"
        type="email"
        onChange={handleChange}
        value={inputValue.email}
      />
      <input
        placeholder="Date Of Birth"
        name="dob"
        type="date"
        onChange={handleChange}
        value={inputValue.dob}
      />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handelNext}>Next</button>
    </div>
  );
};

export default PageOne;
