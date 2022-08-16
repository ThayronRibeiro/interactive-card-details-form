import "./styles.css";

import CardFront from "../../assets/images/bg-card-front.png";
import CardBack from "../../assets/images/bg-card-back.png";

export const AsideLeft = () => {
  return (
    <div className="Container">
      <div className="cardArea">
        <div className="cardFront">
          <img src={CardFront} alt="Card-Front" />
        </div>

        <div className="cardBack">
          <img src={CardBack} alt="Card-Back" />
        </div>
      </div>
    </div>
  );
};
