import React, { useState, useEffect } from "react";
import "../styles/testimonials.css";

function Testimonial(props) {
  const [imgSrc, setImageSrc] = useState("");

  useEffect(() => {
    async function loadImage() {
      // Dynamically import the image
      const { default: img } = await import(
        `../assets/images/${props.img}.png`
      );
      setImageSrc(img);
    }
    loadImage();
  }, [props.img]);
  /* Selecting text to highlight */
  const textParts = props.comment.split(
    new RegExp(`(${props.highlight})`, "gi")
  );
  return (
    <>
      <div className="testimonial">
        <div>
          <img src={imgSrc} alt={`Foto de ${props.name}`} />
        </div>
        <div className="text-container">
          <p className="title">
            <strong>{props.name}</strong> en {props.country}
          </p>
          <p className="title">
            {props.company.job} en <strong>{props.company.name}</strong>
          </p>
          <p className="comment">
            {textParts.map((part, index) =>
              part.toLowerCase() === props.highlight.toLowerCase() ? (
                <strong key={index}>{part}</strong>
              ) : (
                part
              )
            )}
          </p>
        </div>
      </div>
    </>
  );
}
export default Testimonial;
