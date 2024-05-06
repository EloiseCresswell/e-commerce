"use client";
import React, { useState } from "react";
import "./indoorPlantCare.css";
import Carousel from "../components/Carousel.jsx";

export default function Trial() {
  const images = [
    "/images/houseplant1.webp",
    "/images/houseplant2.jpeg",
    "/images/houseplant3.jpeg",
    "/images/houseplant4.jpeg",
    "/images/houseplant5.webp",
  ];

  const imageLinks = [
    "https://www.google.com",
    "https://www.gymshark.com",
    "https://www.nhs.com",
    "https://www.google.com",
    "https://www.google.com",
  ];

  const imageName = [
    "The Philodendron plant, with its forgiving nature and lush foliage, is an ideal choice for beginner houseplant enthusiasts seeking a low-maintenance addition to their indoor spaces.",
    "Aspidistra, known for its resilience and ability to thrive in low light conditions, is a dependable choice for indoor plant enthusiasts looking for a hardy and low-maintenance option.",
    "The Cast Iron Plant, recognized for its robustness and ability to endure neglect, is a resilient option for indoor gardeners seeking a virtually indestructible addition to their plant collection.",
    "Peperomia Obtusifolia, celebrated for its compact size, attractive foliage, and ease of care, is a charming choice for beginner indoor plant enthusiasts seeking a versatile and visually appealing addition to their home.",
    "The Monstera, admired for its striking fenestrated leaves and tropical allure, is a beloved choice among indoor plant enthusiasts seeking a statement piece that adds both beauty and drama to their living spaces.",
  ];
  return (
    <>
      <div className="indoorPlantCareIntro App">
        <h1>Indoor Plant Care</h1>
        <p>
          Welcome to the comprehensive guide to indoor plant care. In this
          resource, we delve into the intricacies of nurturing plants within the
          confines of indoor environments. Whether you're a novice seeking basic
          knowledge or an experienced gardener looking to refine your
          techniques, this page serves as a reliable source of information. From
          understanding light and water requirements to troubleshooting common
          issues, our aim is to equip you with the knowledge and skills
          necessary to cultivate healthy and thriving indoor gardens. Join us as
          we explore the practical aspects of plant care, grounded in scientific
          principles and best practices, to ensure the well-being of your
          botanical companions.
        </p>
      </div>
      <div className="caringForYourHousplants" id="houseplantcare">
        <h2>Caring For Your Houseplants</h2>
        <h3>Top Tips</h3>
        <ol className="topTipsList">
          <li>Be Great</li>
          <li>Water</li>
          <li>Check light levels</li>
          <li>Fresh air</li>
          <li>Repot as required</li>
        </ol>
      </div>
      <main>
        <div className="bestBeginnerHouseplants caringForYourHousplants">
          <h2>Best Beginner Houseplants</h2>
          <p className="indoorPlantCareIntro">
            Explore the images below to discover a curated selection of the best
            beginner houseplants, carefully chosen for their resilience, ease of
            care, and ability to thrive in indoor environments. From lush
            foliage to vibrant blooms, these botanical beauties are perfect
            companions for those just starting their green journey. Let these
            images inspire you to bring the refreshing touch of nature into your
            home with confidence and joy.
          </p>
          <Carousel
            images={images}
            imageLinks={imageLinks}
            imageName={imageName}
          />
          <p className="indoorPlantCareIntro">
            As you browse through the delightful assortment of plants showcased
            below, you might discover some that truly catch your eye and capture
            your heart. If you're curious to learn more about these green
            companions, we suggest taking a peek at the Royal Horticultural
            Society (RHS) website. It's packed with helpful tips and insights to
            help you better understand and care for your newfound leafy friends.
            Happy exploring!
          </p>
        </div>
      </main>
    </>
  );
}
