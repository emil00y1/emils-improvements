import { useState, useRef } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const FormCard = ({ setPaymentData, paymentData, errorMsg }) => {
  const [cnr, setCnr] = useState("");
  const [my, setMy] = useState("");
  const [cvc, setCvc] = useState("");

  const myInputRef = useRef(null);
  const cvcInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, id, value } = e.target;

    let formattedValue = value;
    if (name === "cnr") {
      // AI: Formatting for credit card number
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      setCnr(formattedValue);
    } else if (name === "my") {
      //AI: Formatting for expiration date
      let numericValue = value.replace(/\D/g, "");
      if (numericValue.length === 1 && parseInt(numericValue, 10) >= 2) {
        formattedValue = `0${numericValue}/`;
      } else if (numericValue.length >= 2) {
        formattedValue = `${numericValue.slice(0, 2)}/${numericValue.slice(
          2,
          4
        )}`;
        if (value.endsWith("/") && numericValue.length === 2) {
          // Allow backspace to remove the slash
          formattedValue = numericValue;
        }
      }
      setMy(formattedValue);
    } else if (name === "cvc") {
      // Formatting for CVC
      setCvc(value);
    }

    setPaymentData((paymentData) =>
      paymentData.map((info, index) =>
        index === 0 ? { ...info, [id]: formattedValue } : info
      )
    );

    //AI: Adjusted focus logic based on the new value's length
    if (name === "cnr" && formattedValue.replace(/\s/g, "").length === 16) {
      myInputRef.current.focus();
    } else if (
      name === "my" &&
      formattedValue.replace(/\D/g, "").length === 4
    ) {
      cvcInputRef.current.focus();
    }
  };

  return (
    <>
      <fieldset className="flex flex-col gap-2">
        <div>
          <Label htmlFor="cardname">Name on payment card</Label>
          <Input type="text" id="cardname" onChange={handleInputChange} />
          {paymentData[0].cardname === "" && errorMsg !== "" ? (
            <p className="text-red-600 flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M5.99444 6.5556L6 3.77778M5.99444 8.22223H6M3.66688 1.90935C4.0688 1.87727 4.45036 1.71923 4.75723 1.45771C5.47336 0.84743 6.52664 0.84743 7.24277 1.45771C7.54964 1.71923 7.9312 1.87727 8.33312 1.90935C9.27103 1.98419 10.0158 2.72897 10.0907 3.66688C10.1227 4.0688 10.2808 4.45036 10.5423 4.75723C11.1526 5.47336 11.1526 6.52664 10.5423 7.24277C10.2808 7.54964 10.1227 7.9312 10.0907 8.33312C10.0158 9.27103 9.27103 10.0158 8.33312 10.0907C7.9312 10.1227 7.54964 10.2808 7.24277 10.5423C6.52664 11.1526 5.47336 11.1526 4.75723 10.5423C4.45036 10.2808 4.0688 10.1227 3.66688 10.0907C2.72897 10.0158 1.98419 9.27103 1.90935 8.33312C1.87727 7.9312 1.71923 7.54964 1.45771 7.24277C0.84743 6.52664 0.84743 5.47336 1.45771 4.75723C1.71923 4.45036 1.87727 4.0688 1.90935 3.66688C1.98419 2.72897 2.72897 1.98419 3.66688 1.90935Z"
                  stroke="#DC2626"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {errorMsg}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="cardnumber">Cardnumber</Label>
          <Input
            id="cardnumber"
            type="text"
            name="cnr"
            placeholder="Ex. 1234 1234 1234 1234"
            value={cnr}
            maxLength="19"
            onChange={handleInputChange}
            className="placeholder:text-lightgrey"
          />
          {paymentData[0].cardnumber === "" && errorMsg !== "" ? (
            <p className="text-red-600 flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M5.99444 6.5556L6 3.77778M5.99444 8.22223H6M3.66688 1.90935C4.0688 1.87727 4.45036 1.71923 4.75723 1.45771C5.47336 0.84743 6.52664 0.84743 7.24277 1.45771C7.54964 1.71923 7.9312 1.87727 8.33312 1.90935C9.27103 1.98419 10.0158 2.72897 10.0907 3.66688C10.1227 4.0688 10.2808 4.45036 10.5423 4.75723C11.1526 5.47336 11.1526 6.52664 10.5423 7.24277C10.2808 7.54964 10.1227 7.9312 10.0907 8.33312C10.0158 9.27103 9.27103 10.0158 8.33312 10.0907C7.9312 10.1227 7.54964 10.2808 7.24277 10.5423C6.52664 11.1526 5.47336 11.1526 4.75723 10.5423C4.45036 10.2808 4.0688 10.1227 3.66688 10.0907C2.72897 10.0158 1.98419 9.27103 1.90935 8.33312C1.87727 7.9312 1.71923 7.54964 1.45771 7.24277C0.84743 6.52664 0.84743 5.47336 1.45771 4.75723C1.71923 4.45036 1.87727 4.0688 1.90935 3.66688C1.98419 2.72897 2.72897 1.98419 3.66688 1.90935Z"
                  stroke="#DC2626"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {errorMsg}
            </p>
          ) : null}
        </div>
        <div className="flex gap-5">
          <div>
            <Label htmlFor="exdate">Exp. Date</Label>
            <Input
              id="exdate"
              type="text"
              name="my"
              placeholder="Ex. 12/34"
              value={my}
              maxLength="5"
              onChange={handleInputChange}
              ref={myInputRef}
              className="placeholder:text-lightgrey"
            />
            {paymentData[0].exdate === "" && errorMsg !== "" ? (
              <p className="text-red-600 flex items-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M5.99444 6.5556L6 3.77778M5.99444 8.22223H6M3.66688 1.90935C4.0688 1.87727 4.45036 1.71923 4.75723 1.45771C5.47336 0.84743 6.52664 0.84743 7.24277 1.45771C7.54964 1.71923 7.9312 1.87727 8.33312 1.90935C9.27103 1.98419 10.0158 2.72897 10.0907 3.66688C10.1227 4.0688 10.2808 4.45036 10.5423 4.75723C11.1526 5.47336 11.1526 6.52664 10.5423 7.24277C10.2808 7.54964 10.1227 7.9312 10.0907 8.33312C10.0158 9.27103 9.27103 10.0158 8.33312 10.0907C7.9312 10.1227 7.54964 10.2808 7.24277 10.5423C6.52664 11.1526 5.47336 11.1526 4.75723 10.5423C4.45036 10.2808 4.0688 10.1227 3.66688 10.0907C2.72897 10.0158 1.98419 9.27103 1.90935 8.33312C1.87727 7.9312 1.71923 7.54964 1.45771 7.24277C0.84743 6.52664 0.84743 5.47336 1.45771 4.75723C1.71923 4.45036 1.87727 4.0688 1.90935 3.66688C1.98419 2.72897 2.72897 1.98419 3.66688 1.90935Z"
                    stroke="#DC2626"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {errorMsg}
              </p>
            ) : null}
          </div>
          <div>
            <Label htmlFor="cvc">CVC</Label>
            <Input
              id="cvc"
              type="text"
              name="cvc"
              placeholder="Ex. 123"
              value={cvc}
              maxLength="3"
              onChange={handleInputChange}
              ref={cvcInputRef}
              className="placeholder:text-lightgrey"
            />
            {paymentData[0].cvc === "" && errorMsg !== "" ? (
              <p className="text-red-600 flex items-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M5.99444 6.5556L6 3.77778M5.99444 8.22223H6M3.66688 1.90935C4.0688 1.87727 4.45036 1.71923 4.75723 1.45771C5.47336 0.84743 6.52664 0.84743 7.24277 1.45771C7.54964 1.71923 7.9312 1.87727 8.33312 1.90935C9.27103 1.98419 10.0158 2.72897 10.0907 3.66688C10.1227 4.0688 10.2808 4.45036 10.5423 4.75723C11.1526 5.47336 11.1526 6.52664 10.5423 7.24277C10.2808 7.54964 10.1227 7.9312 10.0907 8.33312C10.0158 9.27103 9.27103 10.0158 8.33312 10.0907C7.9312 10.1227 7.54964 10.2808 7.24277 10.5423C6.52664 11.1526 5.47336 11.1526 4.75723 10.5423C4.45036 10.2808 4.0688 10.1227 3.66688 10.0907C2.72897 10.0158 1.98419 9.27103 1.90935 8.33312C1.87727 7.9312 1.71923 7.54964 1.45771 7.24277C0.84743 6.52664 0.84743 5.47336 1.45771 4.75723C1.71923 4.45036 1.87727 4.0688 1.90935 3.66688C1.98419 2.72897 2.72897 1.98419 3.66688 1.90935Z"
                    stroke="#DC2626"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {errorMsg}
              </p>
            ) : null}
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default FormCard;
