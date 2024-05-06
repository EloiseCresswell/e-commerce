"use client";
import react, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel">
      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <p>&#8592;</p>
        </div>
      </div>
      <img
        className="topTipImage"
        key={currentIndex}
        src={images[currentIndex]}
      />
      <div className="slide_direction">
        <div className="right" onClick={handleNext}>
          <p>&#8594;</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
