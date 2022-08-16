import "./styles.css";
import completeLogo from "../../assets/images/icon-complete.svg";

export const SucessMessage = ({ onClick }: any) => {
  return (
    <div className="finalyCard">
      <img src={completeLogo} alt="completeLogo" />
      <h3> THANK YOU!</h3>
      <span>We´ve added your card details</span>
      <button onClick={onClick}>Continue</button>
    </div>
  );
};
