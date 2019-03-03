import React from "react";
import ReactDOM from "react-dom";
import App, { reducer } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("app reducer", () => {
  it("updates priceData successfully", () => {
    const initialState = { priceData: { type: "LOADING" } };
    const newState = reducer(initialState, {
      type: "SET_PRICE_DATA",
      priceData: { type: "ERROR", message: "Something went wrong." },
    });

    expect(newState).toEqual({
      priceData: { type: "ERROR", message: "Something went wrong." },
    });
  });
});
