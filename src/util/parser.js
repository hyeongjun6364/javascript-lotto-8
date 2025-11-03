const SEPARATORS = [','];

const Parser = (string) => {
  const parsedNumbers = string.split(SEPARATORS).map((num) => num.trim());
  return parsedNumbers;
};

export default Parser;
