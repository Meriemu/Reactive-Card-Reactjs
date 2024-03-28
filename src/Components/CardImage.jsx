import React, { useContext } from "react";
import { Formontext } from "./context/ThemeContext";
import CardImageFront from "../images/bg-card-front.png";
import CardImageBack from "../images/bg-card-back.png";

const CardImage = () => {
  const { cardName, cardNumber, cardDate, cardCvc } = useContext(Formontext);
  return (
    <div className="CreditCard">
      <div className="CreditCard__CardFront">
        <img src={CardImageFront} alt="" />
        <div className="CreditCard__Data">
          <p>{cardNumber}</p>
          <div className="CreditCard__Bottom">
            <p>{cardName}</p>
            <p>
              {cardDate.month} / {cardDate.year}
            </p>
          </div>
        </div>
      </div>
      <div className="CreditCard__CardBack">
        <img src={CardImageBack} alt="" />
        <div className="CreditCard__Cvc">{cardCvc}</div>
      </div>
    </div>
  );
};

export default CardImage;
