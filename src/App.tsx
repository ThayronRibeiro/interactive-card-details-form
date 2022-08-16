import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

import { AsideLeft } from "./components/AsideLeft";
import { Form } from "./components/Form";
import { FormItem } from "./components/FormItem";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [monthCard, setMonthCard] = useState();
  const [yearCard, setYearCard] = useState();
  const [cvc, setCvc] = useState();

  const {
    register,
    handleSubmit,
    watch: any,
    formState: { errors },
    reset,
  } = useForm();

  const [buttonClick, setButtonClick] = useState(false);

  const handleClick = () => {
    if (cardName && cardNumber && monthCard && yearCard && cvc) {
      setButtonClick(true);
    }
  };

  const handleClickContinue = () => {
    setButtonClick(false);
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  return (
    <>
      {/* <div className="App">
        <div className="asideLeft">
          <div className="left"></div>
          <div className="cardsArea">
            <div className="cardFront">
              <img src={cardFront} alt="cardFront" />
              <div className="cardLogo">
                <img src={cardLogo} alt="cardLogo" />
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
              <img src={cardBack} alt="cardBack" />
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
                        {...register("monthExp", {
                          required: true,
                          max: 12,
                        })}
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
            <img src={completeLogo} alt="completeLogo" />
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
              <a
                rel="noreferrer noopener"
                href="https://github.com/ThayronRibeiro"
                target="_blank"
              >
                Thayron Graco{" "}
              </a>
            </strong>
          </h4>
        </div>
      </div> */}

      <div className="ContainerAll">
        <AsideLeft
          cardName={cardName}
          cardNumber={cardNumber}
          monthExp={monthCard}
          yearExp={yearCard}
          cvc={cvc}
        />
        <Form>
          <FormItem
            label="Cardholder Name"
            value={cardName}
            changeValue={(e: any) => setCardName(e.target.value.toUpperCase())}
            placeholder="e.g. Jane Appleseed"
            maxLength={30}
          />
          <FormItem
            label="Card Number"
            mask="9999 9999 9999 9999"
            value={cardNumber}
            changeValue={(e: any) => setCardNumber(e.target.value)}
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <FormItem
            label="EXP. DATE (MM/YY)"
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
            mask="999"
            value={cvc}
            changeValue={(e: any) => setCvc(e.target.value)}
            placeholder="e.g. 123"
          />
        </Form>
      </div>
    </>
  );
}

export default App;
