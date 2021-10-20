import { useState } from "react";
import logo from "./assets/Logo_ML.png";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <img src={logo} alt="MeLi" />
      <label htmlFor="text">Texto: </label>
      <input
        id="text"
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
    </div>
  );
};

export default App;
