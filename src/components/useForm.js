import { useState, useEffect } from "react";
import validateInfo from "./validateInfo";

const useForm = (validateInfo) => {
  const [values, setValues] = useState({
    department:"(주)A",
    userid:"admin",
    password: "",
    password2: "",
    email: "",
    username: "",
    mobile:"010-0000-0000"
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } =
      event.target; /* destructuring, name is the input prop */
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    setErrors(validateInfo(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
