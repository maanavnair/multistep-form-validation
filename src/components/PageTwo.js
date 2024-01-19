import { useContext, useState, useEffect } from "react";
import { FormContext } from "./FormComponent";

const inititalData = {
  street: "",
  zip: "",
  city: "",
  state: "",
};

const statesList = ["", "West Bengal", "Haryana", "Goa", "Punjab", "Bihar"];

const PageTwo = () => {
  const { value, setValue, nextPage, previousPage } = useContext(FormContext);
  const [inputValue, setInputValue] = useState(inititalData);
  const [error, setError] = useState(inititalData);

  //useEffect to get the values of the respective fields on going to the previous page
  useEffect(() => {
    setInputValue({...value});
  }, []);

    //handling errors
  const handleError = () => {
    const newErrors = {
      street: checkStreet(inputValue.street),
      city: checkCity(inputValue.city),
      state: checkState(inputValue.state),
      zip: checkZip(inputValue.zip),
    }
    setError(newErrors);
    return Object.values(newErrors).some((error) => error !== "");//checking for errors
  }

  //Handling errors in Street Address
  const checkStreet = (street) => {
    if(street === ""){
      return "Street name is required";
    }
    if(street.length < 5){
      return "Street Name cannot be less than 5 characters";
    }
    return "";
  }

  //Handling errors in city name
  const checkCity = (city) => {
    if(city === ""){
      return "City is required";
    }
    if(city.length < 3){
      return "City name cannot be less than 3 characters";
    }
    return "";
  }

  //Handling errors in State Name
  const checkState = (state) => {
    if(state === ""){
      return "State is required";
    }
    return "";
  }

  //Handling Errors in Zip Code
  const checkZip = (zip) => {
    const zipRegex = /^\d{6}$/;
    if(zip === ""){
      return "Zip code is required";
    }
    if(!zipRegex.test(zip)){
      return "Enter a valid Zip Code";
    }
    return "";
  }

  //Function to go to the next page
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

  //function to go to the previous page
  const handlePrev = () => {
    previousPage();
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
      <h1>Account Information</h1>
      <div className="input-grp">
      <div className="input">
        <label>Street Address</label>
        <input
        name="street"
        onChange={handleChange}
        value={inputValue.street}
        />
      </div>
      {error.street && <p className="error">{error.street}</p>}
      <div className="input">
        <label>City</label>
        <input
        name="city"
        onChange={handleChange}
        value={inputValue.city}
      />
      </div>
      {error.city && <p className="error">{error.city}</p>}
      <div className="input">
        <label>State</label>
        <select
        placeholder="State"
        name="state"
        onChange={handleChange}
        value={inputValue.state}
        >
        {statesList.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      </div>
      {error.state && <p className="error">{error.state}</p>}
      <div className="input">
        <label>Zip Code</label>
        <input
        name="zip"
        onChange={handleChange}
        value={inputValue.zip}
        />
      </div>
      {error.zip && <p className="error">{error.zip}</p>}
      </div>
      <div className="btn-grp">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handelNext}>Next</button>
      </div>
    </div>
  );
};

export default PageTwo;
