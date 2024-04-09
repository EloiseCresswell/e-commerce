"use state";
import React, { useState, useEffect, useReducer } from "react";
import "./styles.css";
export default function FilterPrice({
  setShowProducts,
  setShowFilterArray,
  text,
  backgroundColour,
  setPriceValue,
  setBackgroundColour,
}) {
  return (
    <>
      {/* add an onClick to run filterArray and set the other states to false */}
      <button
        style={backgroundColour ? { color: "pink" } : {}}
        onClick={() => {
          setShowFilterArray(false),
            setShowProducts(false),
            setPriceValue(text);
          setBackgroundColour(!backgroundColour);
          console.log("clicked!");
        }}
      >
        {text}
      </button>
    </>
  );
}
