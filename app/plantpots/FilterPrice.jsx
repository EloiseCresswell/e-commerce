"use state";
import React, { useState, useEffect, useReducer } from "react";
import "./styles.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function FilterPrice({
  originalData,
  setFilterPrice,
  setShowFilterArray,
  reset,
  setReset,
}) {
  const [sliderValue, setSliderValue] = useState([0, 100]);
  //this is to check if the reset is true, if so the sliders go back to the starter view
  useEffect(() => {
    if (reset === true) {
      setSliderValue([0, 100]);
    }
  }, [reset]);
  const handleSliderChange = (value, userInteraction) => {
    // value is an array containing the lower and upper values of the slider
    // userInteraction is a boolean indicating whether the change was due to user interaction
    setReset(false);
    let filterPrice = originalData.filter(
      (element) => element.price <= value[1] && element.price >= value[0]
    );
    setShowFilterArray(false);
    setFilterPrice(filterPrice);
    console.log(filterPrice);
    // You can update state or perform any other actions based on the slider value here
    setSliderValue(value);
  };
  return (
    <>
      {/* add an onClick to run filterArray and set the other states to false */}
      <RangeSlider max="100" onInput={handleSliderChange} />
      <div className="pricesOfThings">
        <p>£{sliderValue[0]}</p>
        <p>£{sliderValue[1]}</p>
      </div>
    </>
  );
}

// //determining the price
// priceFilterButt.addEventListener("click", function () {
//   filterList.innerHTML = "";
//   let price = slider.value;
// });
