"use client";
import "./styles.css";
import React, { useState, useEffect, useReducer } from "react";

//function here to create filters for the plant pots...
//themes:
//- colour
//- price
//- in stock

export default function Filter({
  fetchPotsData,
  text,
  setShowFilterArray,
  setShowProducts,
  setBackgroundColour,
}) {
  const handleClick = () => {
    console.log("i've been clicked");
    // Extracting the color from the text prop
    setShowFilterArray(true);
    setShowProducts(true);
    let color = "";
    if (text === "Reset") {
      color = "";
      setBackgroundColour(false);
    } else {
      color = text;
    }
    // Calling fetchPotsData function with the extracted color
    fetchPotsData(color);
  };
  return (
    <>
      <button
        onClick={handleClick}
        style={
          text === "Reset"
            ? null
            : {
                backgroundColor: text,
                width: 20,
                height: 20,
                borderRadius: 30,
                border: "none",
              }
        }
      >
        {text === "Reset" ? "Reset" : null}
      </button>
    </>
  );
}
