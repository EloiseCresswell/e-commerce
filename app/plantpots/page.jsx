"use client";
import React, { useState, useEffect, useReducer } from "react";
import Image from "next/image";
import "./styles.css";
import Filter from "./filter.jsx";
import ProductImage from "./productImage.jsx";
import FilterArray from "./filterArray.jsx";
import FilterPrice from "./FilterPrice.jsx";

export default function Trial() {
  const [data, setData] = useState([]);
  const [showFinalPots, setShowFinalPots] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [showFilterArray, setShowFilterArray] = useState(true);
  const [showProducts, setShowProducts] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [priceValue, setPriceValue] = useState("");
  const [filterPrice, setFilterPrice] = useState([]);
  const [reset, setReset] = useState(false);

  //this function is to fetch all the products using the get request
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      let jsonData = await response.json();
      setData(jsonData.payload);
      console.log(jsonData.payload);
      setOriginalData(jsonData.payload);
    };
    fetchData();
  }, []);
  //Local storage to store the basket
  const [inBasket, setInBasket] = useState([]);
  useEffect(() => {
    localStorage.setItem("inBasket", JSON.stringify(inBasket));
    console.log({ inBasket });
  }, [inBasket]);

  //using localStorage to store basket
  const storedBasket = JSON.parse(localStorage.getItem("inBasket"));

  //function to add further items to the basket array
  function addToBasket(name) {
    setInBasket([...inBasket, name]); // Updating the basket state using spread to append name onto the end of the array
    console.log(inBasket); //just used to check it is all working
    return inBasket;
  }
  //reducer function to show the final pots and hide the show more button
  const reducerButton = (state, action) => {
    switch (action.type) {
      case "showMoreClicked":
        return {
          ...state,
          showFinalPots: setShowFinalPots(true),
          showMoreButton: setShowMoreButton(false),
        };
      default:
        throw new Error("Unknown action.");
    }
  };

  const [state, dispatch] = useReducer(reducerButton, {
    showFinalPots: false,
    showMoreButton: true,
  });

  //this function is to fetch all the pots of a specific colour using a HTTP request
  async function fetchPotsData(colour) {
    try {
      const response = await fetch(`http://localhost:3000/products/${colour}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setData([]);
      setData(jsonData.payload);
    } catch (error) {
      console.error(error); // Log the error for debugging
    }
  }
  //this function is to filter based on the array (current we are based on £30, so v specifc ) - this need to be made a function

  //this is a function that links to the reducer button function above
  const handleShowMoreClick = () => {
    dispatch({ type: "showMoreClicked" });
  };

  //this is an array method in order to show the first 12 and then show any further pots after 12
  let firstTenPots = data.slice(0, 12);
  let finalPots = data.slice(12);

  return (
    <>
      <div className="plantPotsTitle">
        <h1>Plant Pots</h1>
        <p>
          Revamp your home with our bespoke plant pots, perfect for any
          houseplant! With our exclusive design and handmade finishes, our
          unique pieces are a must in every home
        </p>
      </div>
      <div className="filterPlantPots">
        <div className="filters">
          <h1>Filters</h1>
          <div className="filtersDiv">
            <h4 className="headingColour">Colour</h4>
            <div className="filterColoursDiv">
              <Filter
                fetchPotsData={fetchPotsData}
                text="blue"
                setShowProducts={setShowProducts}
                setShowFilterArray={setShowFilterArray}
                setShowMoreButton={setShowMoreButton}
                setReset={setReset}
              />
              <Filter
                fetchPotsData={fetchPotsData}
                text="red"
                setShowProducts={setShowProducts}
                setShowFilterArray={setShowFilterArray}
                setShowMoreButton={setShowMoreButton}
                setReset={setReset}
              />
              <Filter
                fetchPotsData={fetchPotsData}
                text="green"
                setShowProducts={setShowProducts}
                setShowFilterArray={setShowFilterArray}
                setShowMoreButton={setShowMoreButton}
                setReset={setReset}
              />
            </div>
            <h4 className="headingColour">Price</h4>
            <FilterPrice
              originalData={originalData}
              setFilterPrice={setFilterPrice}
              setShowFilterArray={setShowFilterArray}
              reset={reset}
              setReset={setReset}
            />
            <Filter
              fetchPotsData={fetchPotsData}
              text="Reset"
              setShowProducts={setShowProducts}
              setShowFilterArray={setShowFilterArray}
              setShowMoreButton={setShowMoreButton}
              setReset={setReset}
            />
          </div>
        </div>
        <div>
          <div className="plantPots">
            {/* //request the plant pots from the products table
  //return the photo of the plant pot and their name (for now) */}

            <div
              className="visibleProducts"
              style={
                showMoreButton
                  ? {}
                  : {
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }
              }
            >
              {showFilterArray ? null : (
                <FilterArray
                  filterPrice={filterPrice}
                  setShowProducts={setShowProducts}
                  setShowMoreButton={setShowMoreButton}
                />
              )}

              {/* mapping through the array to print out a list of the plants
               //making product image state dependent, so if a filter is applied by the array method, it does not show  */}
              {showProducts ? (
                <ProductImage pots={firstTenPots} addToBasket={addToBasket} />
              ) : null}
            </div>
          </div>
          {/* div to create a button to show more to show the rest of the pots*/}
          <div className="buttonDiv">
            {showMoreButton ? (
              <button
                onClick={handleShowMoreClick}
                className="showMoreButton"
                style={{ margin: "30px" }}
              >
                Show more
              </button>
            ) : null}
          </div>
          <div className="plantPots">
            {showFinalPots ? (
              <div
                className="visibleProductsTwo"
                style={{
                  borderTopLeftRadius: "0px",
                  borderTopRightRadius: "0px",
                }}
              >
                {/* //making product image state dependent, so if a filter is applied by the array method, it does not show  */}
                {showProducts ? (
                  <ProductImage pots={finalPots} addToBasket={addToBasket} />
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
