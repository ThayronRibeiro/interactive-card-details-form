import { createContext } from "react";
import "./styles.css";

import CardFront from "../../assets/images/bg-card-front.png";
import CardBack from "../../assets/images/bg-card-back.png";
import LogoCard from "../../assets/images/card-logo.svg";

type Props = {
  cardName?: string | undefined;
  cardNumber?: string | undefined;
  monthExp?: string | number;
  yearExp?: string | number;
  cvc?: string | undefined;
};

export const AsideLeft = ({
  cardName,
  cardNumber,
  monthExp,
  yearExp,
  cvc,
}: Props) => {
  return (
    <div className="Container">
      <div className="cardArea">
        <div className="cardFront">
          <img src={CardFront} alt="Card-Front" />
          <div className="cardFrontInfo--logoCard">
            <img src={LogoCard} alt="Card Logo" />
          </div>
          <div className="cardFrontInfo--name">
            <h4>{cardName ? cardName : "JANE APPLESEED"}</h4>
          </div>
          <div className="cardFrontInfo--cardNumber">
            <h4>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</h4>
          </div>
          <div className="cardFrontInfo--monthExp--yearExp">
            <h4>
              {monthExp && yearExp ? `${monthExp} / ${yearExp}` : `00/00`}
            </h4>
          </div>
        </div>

        <div className="cardBack">
          <img src={CardBack} alt="Card-Back" />
          <div className="cardBackInfo--cvcCode">
            <h4>{cvc ? cvc : "000"}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
