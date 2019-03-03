const parseLine = line => {
  const match = /^(\d+) (\d+) (\d+)$/.exec(line);
  if (!match) {
    throw new Error(`Invalid format: line "${line}" is not valid.`);
  }
  const [_, x, y, price] = match;

  return {
    index: `${x}_${y}`,
    x: parseInt(x),
    y: parseInt(y),
    price: parseInt(price),
  };
};

export default text => {
  const lines = text.split(`\n`);
  const priceData = lines.map(parseLine);

  return priceData;
};
