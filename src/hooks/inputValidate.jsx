import React, { useState, useEffect } from "react";

const inputValidate = (props) => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [inputValid, setInputValid] = useState(null);

  ///////// validate
  useEffect(() => {
    if (
      props.type === "mail" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.trim())
    ) {
      setInputValid(true);
    } else if (props.type === "number" && input.trim() >= 1) {
      setInputValid(true);
    } else if (props.type === "text" && input.trim() !== "") {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [input]);

  // const inputValid = input.length > 0; ///////// validacia shesacvlelia, dasaxvecia yvela tipze
  ////////
  const hasError = !inputValid && isTouched;

  const inputHandler = (e) => {
    setInput(e.target.value.trim());
  };

  const onTouchHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInput("");
    setIsTouched(false);
  };

  return {
    isValid: inputValid,
    hasError,
    inputValue: input,
    inputHandler,
    onTouchHandler,
  };
};

export { inputValidate };
