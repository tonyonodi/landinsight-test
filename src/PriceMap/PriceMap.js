import React from "react";
import styled from "styled-components";
import generateGridArray from "../lib/generateGridArray";
import getHouseColour from "../lib/getHouseColour";

const Square = styled.div`
  display: inline-block;
  background: ${({ color }) => color};
  width: calc(90vmin / 100);
  height: calc(90vmin / 100);
  position: relative;
  & > div {
    display: none;
  }
  &:focus {
    background: black;
    outline: none;
  }
  &:focus > div {
    display: block;
  }
`;

const DataToolTip = styled.div`
  font-size: 1rem;
  line-height: 1.2rem;
  z-index: 1;
  position: absolute;
  color: white;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  bottom: 10px;
  transform: translateX(-50%);
  padding: 7px;
`;

const Grid = styled.div`
  margin: 0 auto;
  width: 90vmin;
  height: 90vmin;
  font-size: 0;
  line-height: 0;
  background: #ececec;
`;

export default ({ priceData, width, height }) => {
  const gridArray = generateGridArray(width, height);
  return (
    <Grid>
      {gridArray.map(coords => {
        const houseIndex = priceData.findIndex(({ index }) => index === coords);
        const house = priceData[houseIndex];
        const color = getHouseColour(houseIndex + 1, priceData.length);
        return (
          <Square tabIndex="-1" key={coords} color={color} house={house}>
            <DataToolTip>
              {house ? (
                <dl>
                  <dt>Coords</dt>
                  <dd>
                    {house.x}, {house.y}
                  </dd>
                  <dt>Price</dt>
                  <dd>£{house.price}</dd>
                </dl>
              ) : (
                "No data"
              )}
            </DataToolTip>
          </Square>
        );
      })}
    </Grid>
  );
};
