"use client";
import React from "react";
import "./footer.css";
import Image from "next/image";

export default function Footer() {
  let mainMenu = [
    "Indoor Plant Care",
    "Plant Pots",
    "Plant Care",
    "Gifting",
    "Blog",
    "Sale",
  ];

  let ourCompany = [
    "Contact us",
    "About us",
    "Shipping and returns",
    "Houseplant Hire",
    "Houseplant Blog",
    "Terms of Service",
    "Who We Support",
  ];

  let signUp = [
    "Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals!",
  ];

  return (
    <>
      <div className="footerTop">
        <div>
          <FooterContents title={"Main Menu"} description={mainMenu} />
        </div>
        <div>
          <FooterContents title={"Our Company"} description={ourCompany} />
        </div>
        <div>
          <FooterContents title={"Sign Up and Save"} description={signUp} />
          <div className="emailDiv">
            <input
              type="text"
              placeholder="Enter your email"
              className="emailInput"
            />
            <Image
              src="/email.jpeg"
              width={50}
              height={50}
              alt="image of an email"
              className="emailImage"
            />
          </div>
        </div>
      </div>
      <div className="howToPay">
        <h1>How to pay</h1>
        <h3>
          <span>&copy;</span>Eloise's plants 2024
        </h3>
      </div>
    </>
  );
}

function FooterContents({ title, description }) {
  return (
    <>
      <ul>
        <li className="firstList">{title}</li>
        <br />
        {description.map((element) => (
          <li key={element.id}>{element}</li>
        ))}
      </ul>
    </>
  );
}
