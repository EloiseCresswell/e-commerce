//this function is to show the pots for given prices... this is using a different approach to the filter function as i am not going to be making a new HTTP request, but using the initial one that is loaded when the page loads and filtering via array methods
"use client";
import React, { useState, useEffect, useReducer } from "react";
import Image from "next/image";
import "./styles.css";
import Filter from "./filter.jsx";
import ProductImage from "./productImage.jsx";

export default function FilterArray({
  setShowProducts,
  filterPrice,
  setShowMoreButton,
}) {
  console.log(`second ${filterPrice}`);
  setShowProducts(false);
  setShowMoreButton(false);
  //this prints out products with the given filterPrice array...
  return <ProductImage pots={filterPrice} />;
}
