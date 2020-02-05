import React from "react";
import { calculateOptionStyles } from "./util";

const Options = ({ item, index }) => {
  const style = calculateOptionStyles(index);
  return (
    <div index={index} value={item.value}>
      {item.label}
    </div>
  );
};

export default Options;
