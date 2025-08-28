import { useState } from "react";
import Header from "./components/Practice/Header.jsx";
import Greeting from "./components/Practice/Greeting.jsx";


const App = () => {

  const [count, setCount]= useState(0);
  return (
    <>
      <Header />
      <Greeting />
      <Greeting name="Gaurav" />
      <Greeting name="React Learner" />

      <h3>Counter Example:</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>{}
    </>
  );
}

export default App;