import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Teams from "./components/Teams";

export default function App() {
  return (
    <Provider store={store}>
      <Teams />
    </Provider>
  );
}
