import React from "react";
import { useState } from "react";
import "./InputForm.css";

function InputForm(props) {
  const initialState = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialState);
  const [emailErrors, setEmailErrors] = useState([]);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormState(initialState);
    console.log("you've logged in");
  };

  function handleEmailBlur(event) {
    console.log("you left the email field");
    const errors = [];
    if (!event.target.value.includes("@")) {
      errors.push([...emailErrors, "email must contain an @ symbol"]);
    }
    if (!event.target.value.includes(".com")) {
      errors.push([...emailErrors, "email must contain '.com'"]);
    }
    setEmailErrors(errors);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        required
        placeholder="Email Address"
        value={formState.email}
        onChange={handleChange}
        onBlur={handleEmailBlur}
      />
      {!!emailErrors.length &&
        emailErrors.map((error) => {
          return <p className="error-message">{error}</p>;
        })}
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        required
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
