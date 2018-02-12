import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import routes from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        <button
          onClick={() => {
            axios.get("/api/getData").then(response => console.log(response));
          }}
        >
          ClickMe
        </button>
      </div>
    );
  }
}

export default App;
