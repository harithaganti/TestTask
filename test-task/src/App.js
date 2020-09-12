import React from "react";
import Dropdown from "./Dropdown";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Dropdown noOfItems="10" Privilege={true} />
    </div>
  );
}
