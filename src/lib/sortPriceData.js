export default unsortedPriceData => {
  const duplicateArray = [...unsortedPriceData];

  duplicateArray.sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
  });

  return duplicateArray;
};
