const generateMock = count => {
  let records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      label: new Date().toISOString(),
      value: +new Date()
    });
  }
  return records;
};
export default generateMock;
