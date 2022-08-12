import { useState } from "react";

import cardFront from "../../assets/images/bg-card-front.png";
import cardBack from "../../assets/images/bg-card-back.png";
import bgDesktop from "../../assets/images/bg-main-desktop.png";

export const Cards = () => {
  return (
    <div className="asideLeft">
      <div className="left">
        <img src={bgDesktop} />
      </div>
      <div className="cardsArea">
        <div className="cardFront">
          <img src={cardFront} />
          <div className="infoFront--cardNumber">
            <p>0000 0000 0000 0000</p>
          </div>
          <div className="infoFront--cardName">
            <p>JANE APPLESEED</p>
          </div>
          <div className="infoFront--cardDate">
            <p>00/00</p>
          </div>
        </div>
        <div className="cardBack">
          <img src={cardBack} />
          <div className="infoBack--cvcCode">
            <p>000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
