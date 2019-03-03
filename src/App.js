import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
import parsePriceData from "./lib/parsePriceData";
import sortPriceData from "./lib/sortPriceData";
import PriceMap from "./PriceMap";

const MAP_WIDTH = 100;
const MAP_HEIGHT = 100;

const initialState = { priceData: { type: "LOADING" } };

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRICE_DATA":
      return { ...state, priceData: action.priceData };
    default:
      throw new Error("Invalid action type passed to reducer.");
  }
};

const AppView = styled.div`
  width: 90vmin;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPriceData = async () => {
    try {
      const res = await fetch("./sold-price-data.txt");
      const text = await res.text();
      const priceData = parsePriceData(text);
      const sortedPriceData = sortPriceData(priceData);

      dispatch({
        type: "SET_PRICE_DATA",
        priceData: { type: "SUCCESS", data: sortedPriceData },
      });
    } catch (error) {
      dispatch({
        type: "SET_PRICE_DATA",
        priceData: { type: "ERROR", message: error.message },
      });
    }
  };

  useEffect(() => {
    fetchPriceData();
  }, []);

  return (
    <AppView className="App">
      <Title>LandInsight Test</Title>
      <p>Click anywhere on the map below to view data.</p>
      <PriceMap
        priceData={state.priceData}
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
      />
    </AppView>
  );
};

export default App;
