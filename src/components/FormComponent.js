import { useState, createContext } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

const inititalData = {
  name: "",
  email: "",
  dob: "",
  street: "",
  zip: "",
  city: "",
  state: "",
  username: "",
  password: "",
  confirm: "",
};

const FormContext = createContext(inititalData);

const FormComponent = () => {
  const pages = [PageOne, PageTwo, PageThree];
  const [value, setValue] = useState(inititalData);
  const [view, setView] = useState(0);
  const nextPage = () => {
    if (view !== 2) {
      setView(view + 1);
    }
  };
  const previousPage = () => {
    if (view !== 0) {
      setView(view - 1);
    }
  };
  const CurrentPage = pages[view];
  return (
    <FormContext.Provider
      value={{ value, setValue, nextPage, previousPage }}>
      <CurrentPage />
    </FormContext.Provider>
  );
};

export { FormContext };
export default FormComponent;
