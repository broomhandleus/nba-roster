import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>NBA Roster Project</h1>
        <h2>Read instructions in README.md</h2>
      </div>
    </Provider>
  );
}
