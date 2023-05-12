import React, { useState } from "react";

const inputValidate = (props) => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const onTouchHandler = () => {
    setIsTouched(true);
  };

  const inputValid = input == "" && isTouched;

  return {
    inputValid,
    inputValue: input,
    isTouched,
    inputHandler,
    onTouchHandler,
  };
};

export default inputValidate;
