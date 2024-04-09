"use client";
import React, { useState, useEffect, useReducer } from "react";
import Image from "next/image";
import "./styles.css";

export default function productImage({ pots, addToBasket }) {
  return (
    <>
      {pots.map((element) => (
        <ul key={element.id}>
          <li>
            <Image
              src={`/images/${element.product_photo}`} //this needs changing to the specific image...✅
              alt="product photo"
              width={240}
              height={260}
            />
            <div className="cartDivider">
              <div>
                <div>{element.name}</div>
                <div>£{element.price}</div>
              </div>
              <button
                className="addToBasket"
                onClick={() => {
                  addToBasket(element.name);
                }}
              ></button>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
}
