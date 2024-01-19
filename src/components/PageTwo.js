import { useContext, useState } from "react";
import { FormContext } from "./FormComponent";

const inititalData = {
  street: "",
  zip: "",
  city: "",
  state: "",
};

const PageTwo = () => {
  const { value, setValue, nextPage, previousPage } = useContext(FormContext);
  const [inputValue, setInputValue] = useState(inititalData);

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
    <div>
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
      <input
        placeholder="State"
        name="state"
        onChange={handleChange}
        value={inputValue.state}
      />
      <input
        placeholder="Zip"
        name="zip"
        onChange={handleChange}
        value={inputValue.zip}
      />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handelNext}>Next</button>
    </div>
  );
};

export default PageTwo;
