import React from "react";
import "./InputForm.css";

function InputForm(props) {
  return (
    <form>
      <label for="email">Email:</label>
      <input id="email" type="email" />
      <label for="password">Password:</label>
      <input id="password" type="password" />
      <button type="submit">Send</button>
    </form>
  );
}

export default InputForm;
