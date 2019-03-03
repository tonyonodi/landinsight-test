import getHouseColour, { getPercentile } from "./getHouseColour";

it(`calculates percentile correctly`, () => {
  expect(getPercentile(1250, 2500)).toEqual(50);
});

it(`gets correct colour`, () => {
  expect(getHouseColour(1250, 2500)).toEqual(`rgba(255, 0, 0, 0.5)`);
});
