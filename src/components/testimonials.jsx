import React from "react";
import "../styles/testimonials.css";

function Testimonial(props) {
  // console.log(props);

  // const imageSrc = require(`../assets/images/${props.img}.png`).default;
  // console.log(`../assets/images/${props.img}.png`);
  return (
    <>
      <div className="testimonial">
        <img
          // src={require(`../assets/images/${props.img}`)}
          // src="https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png"
          alt={`Foto de ${props.name}`}
        />
        <div className="text-container">
          <p className="title">
            <strong>{props.name}</strong> en {props.country}
          </p>
          <p className="title">
            {props.company.job} en <strong>{props.company.name}</strong>
          </p>
          <p className="comment">"{props.comment}"</p>
        </div>
      </div>
    </>
  );
}
export default Testimonial;
