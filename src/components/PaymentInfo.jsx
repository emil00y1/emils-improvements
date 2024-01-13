import { Input } from "./ui/input";
import { Label } from "./ui/label";

import Divider from "./Divider";
import FormCard from "./FormCard";
import Optional from "./Optional";

function PaymentInfo({
  amount,
  vipPrice,
  standardPrice,
  tentTwoAmount,
  tentThreeAmount,
  greenChecked,
  setPaymentData,
  paymentData,
  errorMsg,
  emailError,
}) {
  let vipAmount = amount.reduce((count, ticket) => {
    if (ticket.vip) {
      return count + 1;
    }
    return count;
  }, 0);
  let standardAmount = amount.reduce((count, ticket) => {
    if (ticket.vip === false) {
      return count + 1;
    }
    return count;
  }, 0);

  /* AI anvendt til at opdatere handleChange funktion, så den opdatere specifikke tickets */
  const handleChange = (e) => {
    const { id, value } = e.target;

    setPaymentData((paymentData) =>
      paymentData.map((info, index) =>
        index === 0 ? { ...info, [id]: value } : info
      )
    );
  };

  const greenPrice = greenChecked === true ? 249 : 0;

  const totalPrice =
    vipAmount * vipPrice +
    standardAmount * standardPrice +
    tentTwoAmount * 299 +
    tentThreeAmount * 399 +
    greenPrice +
    99;

  const tax = Math.round(totalPrice * 0.2 * 100) / 100;

  return (
    <>
      <div>
        <h2 className="text-xl mb-5">Payment card</h2>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-5">
          <FormCard
            paymentData={paymentData}
            setPaymentData={setPaymentData}
            errorMsg={errorMsg}
          />

          <div>
            <h2 className="text-xl">Invoice address</h2>
          </div>
          <fieldset className="flex flex-col gap-2">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="text"
                id="email"
                value={paymentData[0].email}
                onChange={handleChange}
              />
              {paymentData[0].email === "" && errorMsg !== "" ? (
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {errorMsg}
                </p>
              ) : null}
              {emailError !== "" &&
              (!paymentData[0].email?.includes("@") ||
                !paymentData[0].email?.includes(".")) ? (
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {emailError}
                </p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="addressline1">Address line 1</Label>
              <Input
                type="text"
                id="addressline1"
                value={paymentData[0].addressline1}
                onChange={handleChange}
              />
              {paymentData[0].addressline1 === "" && errorMsg !== "" ? (
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {errorMsg}
                </p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="addressline2">Address line 2</Label>
              <Optional />
              <Input type="text" id="addressline2" />
            </div>
            <div className="flex gap-5">
              <div>
                <Label htmlFor="zipcode">ZIP code</Label>
                <Input type="text" id="zipcode" onChange={handleChange} />
                {paymentData[0].zipcode === "" && errorMsg !== "" ? (
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {errorMsg}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input type="text" id="city" onChange={handleChange} />
                {paymentData[0].city === "" && errorMsg !== "" ? (
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {errorMsg}
                  </p>
                ) : null}
              </div>
            </div>
          </fieldset>
        </div>
        <div className="flex flex-col gap-6">
          <Divider className="md-hidden" />
          {vipAmount > 0 ? (
            <div className="grid grid-cols-3 gap-6">
              <p>VIP ticket</p> <p>{vipAmount}</p>
              <p className="text-right">{vipAmount * vipPrice}.00</p>
            </div>
          ) : null}
          {standardAmount > 0 ? (
            <div className="grid grid-cols-3 gap-6">
              <p>Standard ticket</p> <p>{standardAmount}</p>
              <p className="text-right">{standardAmount * standardPrice}.00</p>
            </div>
          ) : null}
          {tentTwoAmount > 0 ? (
            <div className="grid grid-cols-3 gap-6">
              <p>2 person tent</p> <p>{tentTwoAmount}</p>
              <p className="text-right">{tentTwoAmount * 299}.00</p>
            </div>
          ) : null}
          {tentThreeAmount > 0 ? (
            <div className="grid grid-cols-3 gap-6">
              <p>3 person tent</p> <p>{tentThreeAmount}</p>
              <p className="text-right">{tentThreeAmount * 399}.00</p>
            </div>
          ) : null}
          {greenChecked === true ? (
            <div className="flex justify-between">
              <p>Green camping</p>
              <p>{greenPrice}.00</p>
            </div>
          ) : null}

          <div className="flex justify-between">
            <p>Booking fee</p>
            <p>99.00</p>
          </div>
          <Divider />
          <div className="flex justify-between text-sm">
            <p>25% tax included</p>
            <p>{tax}</p>
          </div>
          <Divider />
          <div className="flex justify-between text-xl">
            <p>Total</p>
            <div className="text-right">
              <p>DKK</p>
              <p>{totalPrice}.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentInfo;
