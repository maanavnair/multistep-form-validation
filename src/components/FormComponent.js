import { useState, createContext } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import DetailsPage from "./DetailsPage";

const inititalData = {
  name: "",
  email: "",
  dateOfBirth: "",
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
  const pages = [PageOne, PageTwo, PageThree, DetailsPage];
  const [value, setValue] = useState(inititalData);
  const [view, setView] = useState(0);
  const nextPage = () => {  //added logic for going to the next page
    if (view !== pages.length - 1) {
      setView(view + 1);
    }
  };
  const previousPage = () => {  //added logic for going to the previous page
    if (view !== 0) {
      setView(view - 1);
    }
  };
  const CurrentPage = pages[view]; //current page
  return (
    <FormContext.Provider
      value={{ value, setValue, nextPage, previousPage }}>
      <CurrentPage />
    </FormContext.Provider>
  );
};

export { FormContext };
export default FormComponent;
