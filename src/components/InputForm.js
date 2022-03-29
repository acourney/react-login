import React from "react";
import { useState } from "react";
import "./InputForm.css";

function InputForm(props) {
  const initialState = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState(initialState);
    console.log("you've logged in");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email"
        placeholder="Email Address"
        value={formState.email}
        onChange={handleChange}
      />

      <input
        id="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
        value={formState.password}
        minLength={8}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default InputForm;
