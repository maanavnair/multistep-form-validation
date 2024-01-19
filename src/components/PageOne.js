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
    const newErrors = {
      name: checkName(inputValue.name),
      email: checkEmail(inputValue.email),
      dob: checkDob(inputValue.dob),
    }
    setError(newErrors);
    return Object.values(newErrors).some((error) => error !== "");
  }


  const checkName = (name) => {
    if(name === ""){
      return "Name is required";
    }
    if(name.length < 3){
      return "Name should contain atleast 3 characters";
    }
    return "";
  }

  const checkEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
      return "Email is required";
    }
    if(!emailRegex.test(email)){
      return "Must be a valid Email";
    }
    return "";
  }

  const checkDob = (dob) => {
    if(dob === ""){
      return "Date of Birth is required";
    }
    return "";
  }

  const handelNext = () => {
    const isError = handleError();

    if(!isError){
      setValue({
        ...value,
        ...inputValue,
      });
      nextPage();
    }
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

    setError({ ...error, [key]: "" });
  };

  return (
    <div className="form">
      <h1>Page 1</h1>
      <input
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={inputValue.name}
      />
      {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      <input
        placeholder="Email"
        name="email"
        type="email"
        onChange={handleChange}
        value={inputValue.email}
      />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      <input
        placeholder="Date Of Birth"
        name="dob"
        type="date"
        onChange={handleChange}
        value={inputValue.dob}
      />
      {error.dob && <p style={{ color: "red" }}>{error.dob}</p>}
      <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handelNext}>Next</button>
      </div>
    </div>
  );
};

export default PageOne;
