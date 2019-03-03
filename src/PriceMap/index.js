import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import PriceMap from "./PriceMap";

export default ({ priceData, width, height }) => {
  switch (priceData.type) {
    case "LOADING":
      return <Loading />;
    case "ERROR":
      return <Error message={priceData.message} />;
    case "SUCCESS":
      return (
        <PriceMap priceData={priceData.data} width={width} height={height} />
      );
    default:
      break;
  }
};
