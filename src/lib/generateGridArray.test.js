import generateGridArray from "./generateGridArray";

const expected = ["0_0", "1_0", "0_1", "1_1", "0_2", "1_2"];

it(`indexes price data correctly`, () => {
  expect(generateGridArray(2, 3)).toEqual(expected);
});
