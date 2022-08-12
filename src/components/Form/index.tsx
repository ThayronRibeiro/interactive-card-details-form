import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState();

  return (
    <div>
      <form>
        <div className="nameCard">
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="cardNumber">
          <label>CARD NUMBER</label>
          <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
        </div>
        <div className="dateExp">
          <label>EXP. DATE (MM/YY)</label>
          <div className="mmYY">
            <input type="text" placeholder="MM" />
            <input type="text" placeholder="YY" />
          </div>
        </div>
        <div className="cvcCard">
          <label>CVC</label>
          <input type="text" placeholder="e.g. 123" />
        </div>

        <button>Confirm</button>
      </form>
    </div>
  );
};
