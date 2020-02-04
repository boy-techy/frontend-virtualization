import React, { useState } from "react";
import "./styles.css";
import generateMock from "./factory";
import Selector from "./Selector";

export default props => {
  const [records, setRecods] = useState(generateMock(10000));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Selector list={records} />
    </div>
  );
};
