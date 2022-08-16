import { ChangeEvent, useState } from "react";

import { AsideLeft } from "./components/AsideLeft";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { FormItem } from "./components/FormItem";
import { SucessMessage } from "./components/SucessMessage";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [monthCard, setMonthCard] = useState("");
  const [yearCard, setYearCard] = useState("");
  const [cvc, setCvc] = useState("");

  const [buttonClick, setButtonClick] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (cardName && cardNumber && monthCard && yearCard && cvc) {
      setButtonClick(true);
    } else {
      alert("Preencha os campos!");
    }
  };

  const handleReset = () => {
    setCardName("");
    setCardNumber("");
    setMonthCard("");
    setYearCard("");
    setCvc("");
  };

  const handleClickContinue = () => {
    setButtonClick(false);
  };

  return (
    <>
      <div className="ContainerAll">
        <AsideLeft
          cardName={cardName}
          cardNumber={cardNumber}
          monthExp={monthCard}
          yearExp={yearCard}
          cvc={cvc}
        />
        {!buttonClick && (
          <>
            <Form>
              <FormItem
                label="Cardholder Name"
                id="name"
                value={cardName}
                changeValue={(e: any) =>
                  setCardName(e.target.value.toUpperCase())
                }
                placeholder="e.g. Jane Appleseed"
                maxLength={30}
              />
              <FormItem
                label="Card Number"
                id="numberCard"
                mask="9999 9999 9999 9999"
                value={cardNumber}
                changeValue={(e: any) => setCardNumber(e.target.value)}
                placeholder="e.g. 1234 5678 9123 0000"
              />
              <FormItem
                label="EXP. DATE (MM/YY)"
                id="month"
                value={monthCard}
                mask="99"
                changeValue={(e: any) => setMonthCard(e.target.value)}
                placeholder="MM"
                doubleInput={true}
                secondPlaceholder="YY"
                secondValue={yearCard}
                secondChangeValue={(e: any) => setYearCard(e.target.value)}
              />

              <FormItem
                label="CVC"
                id="cvc"
                mask="999"
                value={cvc}
                changeValue={(e: any) => setCvc(e.target.value)}
                placeholder="e.g. 123"
              />

              <Button type="submit" value="Confirm" onClick={handleClick} />
              <Button type="reset" value="Clear" onClick={handleReset} />
            </Form>
          </>
        )}
        {buttonClick && <SucessMessage onClick={handleClickContinue} />}
      </div>
    </>
  );
}

export default App;
