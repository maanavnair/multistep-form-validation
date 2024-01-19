import { useState, useContext } from "react";
import { FormContext } from "./FormComponent";

const inititalData = {
  username: "",
  password: "",
  confirm: "",
};

const PageThree = () => {
  const { value, setValue, previousPage } = useContext(FormContext);
  const [inputValue, setInputValue] = useState(inititalData);

  const handelNext = () => {
    setValue({
      ...value,
      ...inputValue,
    });
  };

  const handlePrev = () => {

    previousPage();
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [key]: value });
  };

  return (
    <div className="form">
      <h1>Page 3</h1>
      <input
        placeholder="Username"
        name="username"
        onChange={handleChange}
        value={inputValue.username}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        onChange={handleChange}
        value={inputValue.password}
      />
      <input
        placeholder="Confirm Password"
        name="confirm"
        type="password"
        onChange={handleChange}
        value={inputValue.confirm}
      />
      <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handelNext}>Submit</button>
      <button onClick={() => console.log(value)}>Get Value</button>
      </div>
    </div>
  );
};

export default PageThree;
