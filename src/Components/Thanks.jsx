import React from "react";
import CheckImage from "../images/icon-complete.svg";

const Thanks = () => {
  return (
    <div className="ReactiveCard__ThanksPage">
      <img src={CheckImage} alt="" />

      <h1>thank you! </h1>
      <p>We've added your card details</p>

      <button type="button"> Coninue</button>
    </div>
  );
};

export default Thanks;
