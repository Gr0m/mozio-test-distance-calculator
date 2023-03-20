const parseCounterInputValue = (value: string) => {
  const parsedValue = parseInt(value, 10);
  
  if (Number.isNaN(parsedValue) || parsedValue < 0) {
    return 0;
  }
  
  return parsedValue;
};

export default parseCounterInputValue;
