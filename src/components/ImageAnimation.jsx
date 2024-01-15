import React, { useState, useEffect } from "react";
import "./ImageAnimation.css"; // Create a CSS file for styling

const ImageAnimation = ({ isAnimating, isTyping, doneAnimating }) => {
  const images = Array.from(
    { length: 265 },
    (_, index) => `frame${index.toString().padStart(3, "0")}.png`
  );
  const [currentImage, setCurrentImage] = useState(0);
  const [shouldPause, setShouldPause] = useState(false);

  useEffect(() => {
    let interval;

    if (isAnimating) {
      let startFrame = 0;
      let endFrame = isTyping ? 150 : 264;

      interval = setInterval(() => {
        setCurrentImage((prevImage) => {
          const nextImage = (prevImage + 1) % images.length;

          if (nextImage === endFrame) {
            clearInterval(interval);
          }

          return nextImage;
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isAnimating, isTyping, images.length]);

  return (
    <div className="image-container">
      <img
        src={`./assets/downAnimation/${images[currentImage]}`}
        alt={`Image ${currentImage}`}
      />
    </div>
  );
};

export default ImageAnimation;
