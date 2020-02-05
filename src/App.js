import React, { useState } from "react";
import "./styles.css";
import generateMock from "./factory";
import Selector from "./Selector";
import { ROW_COUNT } from "./constant";

export default props => {
  const [records] = useState(generateMock(ROW_COUNT));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Selector list={records} />
    </div>
  );
};
