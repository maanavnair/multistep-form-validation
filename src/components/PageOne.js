import React, { useState, useContext, useEffect } from "react";
import { FormContext } from "./FormComponent";

const inititalData = {
  name: "",
  email: "",
  dateOfBirth: "",
};

const PageOne = () => {
  const { value, setValue, nextPage } = useContext(FormContext);
  const [inputValue, setInputValue] = useState(inititalData);
  const [error, setError] = useState(inititalData);

  //useEffect to get the values of the respective fields on going to the previous page
  useEffect(() => {
    setInputValue({...value});
  }, []);

  //handling errors
  const handleError = () => {
    const newErrors = {
      name: checkName(inputValue.name),
      email: checkEmail(inputValue.email),
      dateOfBirth: checkdateOfBirth(inputValue.dateOfBirth),
    }
    setError(newErrors);
    return Object.values(newErrors).some((error) => error !== ""); //checking for errors
  }

  //Handing Error in the Name
  const checkName = (name) => {
    if(name === ""){
      return "Name is required";
    }
    if(name.length < 3){
      return "Name should contain atleast 3 characters";
    }
    return "";
  }

  //Handling error in the Email
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

  //Handling error in the date of birth
  const checkdateOfBirth = (dateOfBirth) => {
    if(dateOfBirth === ""){
      return "Date of Birth is required";
    }
    return "";
  }
  
  //function to go to the next page
  const handelNext = () => {
    const isError = handleError();

    if(!isError){
      setValue({
        ...value,
        ...inputValue,
      });
      nextPage();
    }
  }

  //handling any changes in the input
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [key]: value });
    setError({ ...error, [key]: "" }); //removing error message when user starts typing
  };

  return (
    <div className="form">
      <h1>Personal Information</h1>
      <div className="input-grp">
      <div className="input">
        <label>Name</label>
        <input
          name="name"
          onChange={handleChange}
          value={inputValue.name}
        />
      </div>
      {error.name && <p className="error">{error.name}</p>}
      <div className="input">
        <label>Email</label>
        <input
        name="email"
        type="email"
        onChange={handleChange}
        value={inputValue.email}
        />
      </div>
      {error.email && <p className="error">{error.email}</p>}
      <div className="input">
        <label>Date of Birth</label>
        <input
        name="dateOfBirth"
        type="date"
        onChange={handleChange}
        value={inputValue.dateOfBirth}
        />
      </div>
      {error.dateOfBirth && <p className="error">{error.dateOfBirth}</p>}
      </div>
      <div className="btn-grp">
        <button onClick={handelNext}>Next</button>
      </div>
    </div>
  );
};

export default PageOne;
