import { useContext, useState } from "react";
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

  const handleError = () => {
    const newErrors = {
      street: checkStreet(inputValue.street),
      city: checkCity(inputValue.city),
      state: checkState(inputValue.state),
      zip: checkZip(inputValue.zip),
    }
    setError(newErrors);
    return Object.values(newErrors).some((error) => error !== "");
  }

  const checkStreet = (street) => {
    
  }

  const checkCity = (city) => {

  }

  const checkState = (state) => {

  }

  const checkZip = (zip) => {

  }

  const handelNext = () => {
    setValue({
      ...value,
      ...inputValue,
    });
    nextPage();
  };

  const handlePrev = () => {

    previousPage();
  }

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [key]: value });
  };

  return (
    <div className="form">
      <h1>Page 2</h1>
      <input
        placeholder="Street Address"
        name="street"
        onChange={handleChange}
      />
      <input
        placeholder="City"
        name="city"
        onChange={handleChange}
        value={inputValue.city}
      />
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
      <input
        placeholder="Zip"
        name="zip"
        onChange={handleChange}
        value={inputValue.zip}
      />
      <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handelNext}>Next</button>
      </div>
    </div>
  );
};

export default PageTwo;
