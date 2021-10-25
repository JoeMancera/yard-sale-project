import React, { useState} from "react";

const Button = () => {
  const [name, setName] = useState("Joe");
  return (
    <button>Hello {name}, good morning! </button>
  )
}

export default Button; 