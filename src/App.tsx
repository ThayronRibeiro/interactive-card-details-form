import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./App.css";

import cardFront from "./assets/images/bg-card-front.png";
import cardBack from "./assets/images/bg-card-back.png";
import bgDesktop from "./assets/images/bg-main-desktop.png";
import bgMobile from "./assets/images/bg-main-mobile.png";
import cardLogo from "./assets/images/card-logo.svg";

import completeLogo from "./assets/images/icon-complete.svg";

import { Form } from "./components/Form";
import { Cards } from "./components/Cards";

import InputMask from "react-input-mask";

const CardNumberMask = (props: any) => {
  return (
    <InputMask
      mask="9999 9999 9999 9999"
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      style={props.style}
    ></InputMask>
  );
};

function App() {
  const [windowSize, setWindowsSize] = useState(window.screen.width);

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [monthExp, setMonthExp] = useState("");
  const [yearExp, setYearExp] = useState("");
  const [cvcCode, setCvcCode] = useState<number>();

  const {
    register,
    handleSubmit,
    watch: any,
    formState: { errors },
    reset,
  } = useForm();

  const [buttonClick, setButtonClick] = useState(false);

  const handleClick = () => {
    if (name && cardNumber && monthExp && yearExp && cvcCode) {
      setButtonClick(true);
    }
  };

  const handleReset = () => {
    setName("");
    setCardNumber("");
    setMonthExp("");
    setYearExp("");
    setCvcCode(0o0);
  };

  const handleClickContinue = () => {
    setButtonClick(false);
  };

  return (
    <div className="App">
      <div className="asideLeft">
        <div className="left"></div>
        <div className="cardsArea">
          <div className="cardFront">
            <img src={cardFront} />
            <div className="cardLogo">
              <img src={cardLogo} />
            </div>
            <div className="infoFront--cardNumber">
              <p>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</p>
            </div>
            <div className="infoFront--cardName">
              <p>{name ? name : "JANE APPLESEED"}</p>
            </div>
            <div className="infoFront--cardDate">
              <p>{monthExp ? `${monthExp} / ${yearExp}` : `00/00`}</p>
            </div>
          </div>

          <div className="cardBack">
            <img src={cardBack} />
            <div className="infoBack--cvcCode">
              <p>{cvcCode ? cvcCode : "000"}</p>
            </div>
          </div>
        </div>
      </div>

      {buttonClick === false && (
        <div>
          <form onSubmit={handleSubmit(handleClick)}>
            <div className="nameCard">
              <>
                <label>CARDHOLDER NAME</label>
                <input
                  {...register("name", { required: true })}
                  id="name"
                  placeholder="e.g. Jane Appleseed"
                  maxLength={30}
                  value={name}
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                  style={{
                    border: errors.name && !name ? "2px solid red" : "",
                  }}
                />
                {errors.name && !name && (
                  <span className="errorInputSpan">
                    Fill the Cardholder name
                  </span>
                )}
              </>
            </div>
            <div className="cardNumber">
              <>
                <label>CARD NUMBER</label>
                <CardNumberMask
                  {...register("cardNumber", { required: true })}
                  id="cardNumber"
                  placeholder="e.g. 1234 5678 9123 0000"
                  value={cardNumber}
                  onChange={(e: any) => setCardNumber(e.target.value)}
                  style={{
                    border:
                      errors.cardNumber && !cardNumber ? "2px solid red" : "",
                  }}
                />
                {errors.cardNumber && !cardNumber && (
                  <span className="errorInputSpan">Fill the Card number</span>
                )}
              </>
            </div>
            <div className="smallInputsArea">
              <div className="mmYY--Area">
                <label>EXP. DATE (MM/YY)</label>
                <div className="dateExp">
                  <div className="mm">
                    <input
                      {...register("monthExp", { required: true, max: 12 })}
                      className="inputSmall"
                      type="text"
                      placeholder="MM"
                      value={monthExp}
                      onChange={(e) => setMonthExp(e.target.value)}
                      maxLength={2}
                      max={12}
                      style={{
                        border:
                          errors.monthExp && !monthExp ? "2px solid red" : "",
                      }}
                    />
                    <div className="inputSmallArea">
                      {errors.monthExp && !monthExp && (
                        <span className="errorInputSpan">Fill the Month</span>
                      )}
                    </div>
                  </div>
                  <div className="yy">
                    <input
                      {...register("yearExp", { required: true })}
                      className="inputSmall"
                      type="text"
                      placeholder="YY"
                      value={yearExp}
                      onChange={(e) => setYearExp(e.target.value)}
                      maxLength={2}
                      style={{
                        border:
                          errors.yearExp && !yearExp ? "2px solid red" : "",
                      }}
                    />
                    <div className="inputSmallArea">
                      {errors.yearExp && !yearExp && (
                        <span className="errorInputSpan">Fill the Year</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="cvcCard">
                <label>CVC</label>
                <input
                  {...register("cvcCode", { required: true })}
                  type="text"
                  placeholder="e.g. 123"
                  value={cvcCode ? cvcCode : 0o0}
                  onChange={(e) => setCvcCode(parseInt(e.target.value))}
                  maxLength={3}
                  className="inputSmall"
                />
                {cvcCode === null && (
                  <span className="errorInputSpan">Fill the CVC Code</span>
                )}
              </div>
            </div>

            <input type="submit" value="Confirm" onClick={handleClick} />
            <input type="reset" value="Clear" onClick={handleReset} />
          </form>
        </div>
      )}

      {buttonClick && (
        <div className="finalyCard">
          <img src={completeLogo} />
          <h3> THANK YOU!</h3>
          <span>We´ve added your card details</span>
          <button onClick={handleClickContinue}>Continue</button>
        </div>
      )}

      <div className="codedBy">
        <h4>
          Coded by{" "}
          <strong>
            {" "}
            <a href="https://github.com/ThayronRibeiro" target="_blank">
              Thayron Graco{" "}
            </a>
          </strong>
        </h4>
      </div>
    </div>
  );
}

export default App;
