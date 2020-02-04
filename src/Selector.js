import React from "react";

const Options = React.memo(({ item }) => {
  return <option value={item.value}>{item.label}</option>;
});

export default ({ list }) => {
  return (
    <select>
      {list.map(item => (
        <Options item={item} />
      ))}
    </select>
  );
};
