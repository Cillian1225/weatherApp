import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let counter = 0;

  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter = counter + 1;
    //setCounter2(counter2 + 1);
    setValue(value + 2);
    console.log("counter는", counter, "counter2는", counter2);
  };
  useEffect(() => {
    console.log("UseEffect 1 fire!!");
  }, []);
  useEffect(() => {
    console.log("useEffect 2 Fire! 카운터", counter2);
  }, [counter2]);

  useEffect(() => {
    console.log("useEffect 2 Fire! 벨류", value);
  }, [value]);
  return (
    <div>
      {console.log("Render")}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
