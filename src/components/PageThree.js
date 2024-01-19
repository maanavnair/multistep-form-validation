import { useState, useContext, useEffect } from "react";
import { FormContext } from "./FormComponent";

const inititalData = {
  username: "",
  password: "",
  confirm: "",
};

const PageThree = () => {
  const { value, setValue, previousPage, nextPage } = useContext(FormContext);
  const [inputValue, setInputValue] = useState(inititalData);
  const [error, setError] = useState(inititalData);

  useEffect(() => {
    setInputValue({...value});
  }, []);

  const handleError = () => {
    const newErrors = {
      username: checkUsername(inputValue.username),
      password: checkPassword(inputValue.password),
      confirm: checkConfirm(inputValue.password, inputValue.confirm),
    }
    setError(newErrors);
    return Object.values(newErrors).some((error) => error !== "");
  }

  const checkUsername = (username) => {
    if(username === ""){
      return "Username is required";
    }
    if(username.length < 3){
      return "Username cannot be less than 3 characters";
    }
    return "";
  }

  const checkPassword = (password) => {
    if(password === ""){
      return "Password is required";
    }
    if(password.length < 6){
      return "Password cannot be less than 6 characters";
    }
    return "";
  }

  const checkConfirm = (password, confirm) => {
    if(password !== confirm){
      return "Confirm Password must be equal to Password";
    }
    return "";
  }

  const handelNext = () => {
    const isError = handleError();
    if(!isError){
      setValue({
        ...value,
        ...inputValue,
      })
      nextPage();
    }
  }

  const handlePrev = () => {
    previousPage();
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [key]: value });
    setError({ ...error, [key]: "" });
  };

  return (
    <div className="form">
      <h1>Account Setup</h1>
      <div className="input-grp">
      <div className="input">
        <label>Username</label>
        <input
        name="username"
        onChange={handleChange}
        value={inputValue.username}
        />
      </div>
      {error.username && <p className="error">{error.username}</p>}
      <div className="input">
        <label>Password</label>
        <input
        name="password"
        type="password"
        onChange={handleChange}
        value={inputValue.password}
        />
      </div>
      {error.password && <p className="error">{error.password}</p>}
      <div className="input">
        <label>Confirm Password</label>
        <input
        name="confirm"
        type="password"
        onChange={handleChange}
        value={inputValue.confirm}
        />  
      </div>
      {error.confirm && <p className="error">{error.confirm}</p>}
      </div>
      <div className="btn-grp">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handelNext}>Submit</button>
      </div>
    </div>
  );
};

export default PageThree;
