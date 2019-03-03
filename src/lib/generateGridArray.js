export default (width, height) => {
  let array = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      array.push(`${x}_${y}`);
    }
  }
  return array;
};
