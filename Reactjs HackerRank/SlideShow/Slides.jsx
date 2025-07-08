import React, { useState } from "react";
import { SLIDES_DATA } from "../constants";

function Slides({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleRestart = () => {
    setSlideIndex(0);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setSlideIndex((next) => next - 1);
  };

  const isFirstSlide = slideIndex === 0;
  const isLastSlide = slideIndex === slides.length - 1;

  const currentSlide = slides[slideIndex];

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={handleRestart}
          disabled={isFirstSlide}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={handlePrev}
          disabled={isFirstSlide}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={handleNext}
          disabled={isLastSlide}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
      </div>
    </div>
  );
}

export default Slides;
