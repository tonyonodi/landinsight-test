import parsePriceData from "./parsePriceData";

const testData = `60 23 1422640
58 66 3653379
61 62 5045331
57 91 4405635
72 51 4213691
91 24 3215271
35 67 24844
20 59 7497435
49 1 6988943
78 39 3497680`;

const expected = [
  { index: "60_23", x: 60, y: 23, price: 1422640 },
  { index: "58_66", x: 58, y: 66, price: 3653379 },
  { index: "61_62", x: 61, y: 62, price: 5045331 },
  { index: "57_91", x: 57, y: 91, price: 4405635 },
  { index: "72_51", x: 72, y: 51, price: 4213691 },
  { index: "91_24", x: 91, y: 24, price: 3215271 },
  { index: "35_67", x: 35, y: 67, price: 24844 },
  { index: "20_59", x: 20, y: 59, price: 7497435 },
  { index: "49_1", x: 49, y: 1, price: 6988943 },
  { index: "78_39", x: 78, y: 39, price: 3497680 },
];

it(`parses correct price data`, () => {
  expect(parsePriceData(testData)).toEqual(expected);
});

it(`throws a useful error when passed invalid string`, () => {
  expect(() => parsePriceData("hello")).toThrowError(
    new Error(`Invalid format: line "hello" is not valid.`)
  );
});
