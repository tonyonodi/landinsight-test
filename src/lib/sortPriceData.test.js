import sortPriceData from "./sortPriceData";

const unsortedData = [
  { x: 60, y: 23, price: 1422640 },
  { x: 58, y: 66, price: 3653379 },
  { x: 61, y: 62, price: 5045331 },
  { x: 57, y: 91, price: 4405635 },
  { x: 72, y: 51, price: 4213691 },
  { x: 91, y: 24, price: 3215271 },
  { x: 35, y: 67, price: 24844 },
  { x: 20, y: 59, price: 7497435 },
  { x: 49, y: 1, price: 6988943 },
  { x: 78, y: 39, price: 3497680 },
];

const sortedData = [
  { x: 35, y: 67, price: 24844 },
  { x: 60, y: 23, price: 1422640 },
  { x: 91, y: 24, price: 3215271 },
  { x: 78, y: 39, price: 3497680 },
  { x: 58, y: 66, price: 3653379 },
  { x: 72, y: 51, price: 4213691 },
  { x: 57, y: 91, price: 4405635 },
  { x: 61, y: 62, price: 5045331 },
  { x: 49, y: 1, price: 6988943 },
  { x: 20, y: 59, price: 7497435 },
];

it(`sorts price data correctly`, () => {
  expect(sortPriceData(unsortedData)).toEqual(sortedData);
});
