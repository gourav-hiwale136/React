import { useState } from "react";
import Header from "./Header.jsx";
import Greeting from "./Greeting.jsx";
import "./App.css"

const App = () => {

  const [count, setCount]= useState(0);
  return (
  <div className="container">
      <Header />
      <Greeting />
      <Greeting name="Gourav 😎" />
      <Greeting name="React Learner 😎" />

      <h3>Mini Counter</h3>
      <p className="count-value">Count: {count}</p>
    <div className="button-group">
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>{}
    </div>
  </div>
  );
}

export default App;