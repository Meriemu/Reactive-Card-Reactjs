import React from "react";
import {useNavigate} from "react-router";
import CheckImage from "../images/icon-complete.svg";

const Thanks = () => {
  const navigate = useNavigate();
  return (
    <div className="ReactiveCard__ThanksPage">
      <img src={CheckImage} alt="" />

      <h1>thank you! </h1>
      <p>We've added your card details</p>

      <button type="button" onClick={() => navigate(0)}>
        Coninue
      </button>
    </div>
  );
};

export default Thanks;
