"use client";
import { useState } from "react";

import React from "react";
import Link from "next/link";
import "./header.css";

export default function Headerlinks() {
  //links for the header to go to other items - currently as an array
  const links = [
    { id: 1, label: "Indoor Plant Care" },
    { id: 2, label: "Plant Pots" },
    { id: 3, label: "Plant Care" },
    { id: 4, label: "Gifting" },
    { id: 5, label: "Blog" },
    { id: 6, label: "Sale" },
  ];

  const showBox = [
    ["potential link", "potential link2"],
    ["trial2"],
    ["potential link", "potential link2"],
    ["potential link", "potential link2"],
    ["potential link", "potential link2"],
    ["potential link", "potential link2"],
  ];

  const [showLinks, setShowLinks] = useState(-1);

  return (
    <>
      {/* map to change the links into a h1 element */}
      <div className="headerLinks">
        {links.map((element, index) => {
          console.log({ showLinks });
          return (
            <>
              <ul key={element.id}>
                <li
                  onMouseEnter={() => setShowLinks(index)}
                  onMouseLeave={() => setShowLinks(-1)}
                >
                  <Link
                    href={{
                      // this changes the element to delete any white space and to lower case
                      pathname: `/${element.label
                        .replace(/\s/g, "")
                        .toLowerCase()}`,
                    }}
                  >
                    {element.label}
                  </Link>
                  {/* this is to show a 'box' outlining links based on the showbox array of the index (which is set by the key  above) */}
                  <div>
                    {showLinks === index && (
                      <div className="showList">
                        {showBox[index].map((element) => {
                          return (
                            <>
                              <ul key={element.id}>
                                <li>{element}</li>
                              </ul>
                            </>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
}
