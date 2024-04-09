"use client";
import { useState, useEffect } from "react";
import React from "react";
import "./header.css";
import Link from "next/link";
import Headerlinks from "./header_links.jsx";

export default function Header() {
  const [searchBar, setSearchBar] = useState(false);
  const [showBasket, setshowBasket] = useState(false);

  //using localStorage in order to store the inBasket array, with the aim for it to be edited in the plantpot page.jsx
  const [inBasket, setInBasket] = useState([]);

  const storedBasket = () => {
    // This code will execute only on the client-side
    const storedBasket = JSON.parse(localStorage.getItem("inBasket"));
    if (storedBasket) {
      setInBasket(storedBasket);
    }
    setshowBasket(!showBasket);
  };

  console.log(`inBasket length ${inBasket.length}`);
  let productsBasket = localStorage.getItem("inBasket");
  let productsArray = JSON.parse(productsBasket);
  console.log(`productsARRAY ${productsArray}`);
  console.log(`${typeof productsArray} productsArray`);

  return (
    <>
      <div className="header_top">
        <div className="searchBar">
          {searchBar ? (
            <input
              type="text"
              className="searchInput"
              placeholder="search here"
            ></input>
          ) : null}
          <button
            className="searchButton"
            onClick={() => setSearchBar(!searchBar)}
          ></button>
        </div>
        <Link href="/">
          <div className="eloise_houseplants">
            <h1>Eloise's Houseplants</h1> <h2>Creating Happy Spaces</h2>
          </div>
        </Link>
        <div className="basketDiv">
          <button className="basketButton" onClick={() => storedBasket()}>
            {" "}
          </button>
          <div>
            {showBasket && (
              <div className="basketShowing">
                {productsBasket.length >= 3 ? (
                  productsArray.map((element) => {
                    return (
                      <>
                        <ul>
                          <li key={element.id}>{element}</li>
                        </ul>
                      </>
                    );
                  })
                ) : (
                  <ul>
                    <li>Nothing in basket currently!</li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <Headerlinks />
      </div>
      <hr />
    </>
  );
}
