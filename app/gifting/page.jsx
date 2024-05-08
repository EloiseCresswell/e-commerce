"use client";
import Image from "next/image";
import GiftingProducts from "../components/GiftingProducts";
import React, { useState, useEffect, useReducer } from "react";
import "./styles.css";

const products = [
  {
    name: "Eco Bundle",
    picture: "bundle1.webp",
    price: "49.99",
  },
  {
    name: "Zen Set",
    picture: "bundle2.webp",
    price: "29.99",
  },
  {
    name: "Joy Trio",
    picture: "bundle3.webp",
    price: "69.99",
  },
];

export default function Trial() {
  //using localStorage to store basket
  const storedBasket = JSON.parse(localStorage.getItem("inBasket"));
  const [inBasket, setInBasket] = useState([]);

  useEffect(() => {
    localStorage.setItem("inBasket", JSON.stringify(inBasket));
    console.log({ inBasket });
  }, [inBasket]);
  //function to add further items to the basket array
  function addToBasket(name) {
    setInBasket([...inBasket, name]); // Updating the basket state using spread to append name onto the end of the array
    console.log(inBasket); //just used to check it is all working
    return inBasket;
  }
  return (
    <>
      <div className="giftingPage">
        <h1 className="giftingHeader">Gifting</h1>
        <p>
          Welcome to our Houseplant Gifting Page, where you can find the perfect
          present for the plant lover in your life! Delight them with our
          thoughtfully curated gift bundles, pairing lush greenery with stylish
          pots for an instant pop of botanical charm in any space. Choose from
          our selection of vibrant houseplants, from low-maintenance succulents
          to elegant ferns, each paired with a hand-selected pot designed to
          complement their unique beauty. Whether you're celebrating a birthday,
          anniversary, or just want to brighten someone's day, our plant gift
          bundles are sure to bring joy and a touch of nature into their home.
          Shop now and spread the gift of greenery!
        </p>
        <h2 className="giftBundlesHeader">Gift bundles</h2>
        <div className="giftingProducts">
          <GiftingProducts products={products} addToBasket={addToBasket} />
        </div>
        <div className="wrappingSection">
          <p>
            After selecting your perfect houseplant bundle, why not add a
            personal touch with our optional gift wrapping service? Choose from
            our selection of stylish wraps and add a heartfelt note to make your
            gift extra special. Plus, with our fast and reliable shipping
            options, you can rest assured that your thoughtful present will
            arrive right on time. Make their day even brighter with a
            beautifully wrapped houseplant bundle from our collection.
          </p>
        </div>
      </div>
    </>
  );
}
