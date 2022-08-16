import React, { useState } from "react";

import { FormItem } from "../FormItem";
import "./styles.css";

export const Form = ({ children }: any) => {
  const [cardNumber, setCardNumber] = useState();
  const [monthCard, setMonthCard] = useState();
  const [yearCard, setYearCard] = useState();
  const [cvc, setCvc] = useState();

  return (
    <div className="ContainerForm">
      <form>
        {children}
        {/* <FormItem
          label="Card Number"
          value={cardNumber}
          changeValue={(e: any) => setCardNumber(e.target.value)}
          placeholder="e.g. 1234 5678 9123 0000"
        />

        <FormItem
          label="EXP. DATE (MM/YY)"
          value={monthCard}
          changeValue={(e: any) => setMonthCard(e.target.value)}
          placeholder="MM"
          doubleInput={true}
          secondPlaceholder="YY"
          secondValue={yearCard}
          secondChangeValue={(e: any) => setYearCard(e.target.value)}
        />

        <FormItem
          label="CVC"
          value={cvc}
          changeValue={(e: any) => setCvc(e.target.value)}
          placeholder="e.g. 123"
        /> */}
      </form>
    </div>
  );
};

export default Form;
