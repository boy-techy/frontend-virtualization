const caculateStyles = (totalRowCount, rowHeight = 10) => {
  const height = totalRowCount * rowHeight;
  return {
    height: height,
    maxHeight: height,
    position: "relative"
  };
};

const calculateOptionStyles = (rowIndex, rowHeight = 10) => {
  let top = rowIndex * rowHeight;
  top = top ? top + 1 : top;
  return {
    top,
    position: "absolute",
    left: 0
  };
};

export { caculateStyles, calculateOptionStyles };
