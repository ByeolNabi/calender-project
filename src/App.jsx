import { useState } from "react";
import "./App.css";

import Calender from "./Calender/Calender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calender />
      <h1>hello world</h1>
    </>
  );
}

export default App;
