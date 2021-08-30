import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
  }

  increment = () => {
    this.setState({ i: this.state.i + 1 });
  };

  render() {
    return (
      <>
        <h1>{this.state.i}</h1>
        <button onClick={this.increment}>Pencet</button>
      </>
    );
  }
}

function AppFunc() {
  const [increment, setIncrement] = useState(0);
  const [objek, setObjek] = useState({
    a: 1,
    b: 2,
    c: 3,
  });

  function nambahinState() {
    setIncrement(increment++);
    setObjek((state) => ({ ...state, a: state.a++ }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
