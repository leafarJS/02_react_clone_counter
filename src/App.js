import "./App.css";
import logo from "./assets/freecodecamp-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";
//
const initialState = 0;
function App() {
  const [numClicks, setNumClicks] = useState(initialState);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };
  const handleCounter = () => {
    setNumClicks(initialState);
  };
  return (
    <div className="App">
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo free code camp" />
      </div>
      <div>
        <Counter numClicks={numClicks} />
        <Button text="Click" isButtonClick={true} handleClick={handleClick} />
        <Button
          text="Reset"
          isButtonClick={false}
          handleClick={handleCounter}
        />
      </div>
    </div>
  );
}

export default App;
