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
    // Extracting the color from the text prop
    setShowFilterArray(true);
    setShowProducts(true);
    let color = "";
    if (text === "Reset") {
      color = "";
      setBackgroundColour(false);
    } else {
      color = text.toLowerCase().replace(/\s/g, "");
    }
    // Calling fetchPotsData function with the extracted color
    fetchPotsData(color);
  };
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
}
