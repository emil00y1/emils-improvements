import { Button } from "./ui/button";
import { useEffect, useState } from "react";

function NextBtn({
  setErrorMsg,
  setPageView,
  pageView,
  amount,
  chosenArea,
  acceptedTerms,
  setTermsError,
  paymentData,
  setEmailError,
}) {
  const [containsEmptyString, setContainsEmptyString] = useState(false);
  const [containsEmptyString2, setContainsEmptyString2] = useState(false);
  const [containsValidEmail, setContainsValidEmail] = useState(true);
  const [containsValidPersonalEmail, setContainsValidPersonalEmail] =
    useState(true);

  //AI: Update containsEmptyString whenever amount changes
  useEffect(() => {
    setContainsEmptyString(
      amount.some((obj) => Object.values(obj).some((value) => value === ""))
    );
  }, [amount]);

  useEffect(() => {
    const isInvalidEmail = amount.some((obj) => {
      const email = obj.email;
      return !(email && email.includes("@") && email.includes("."));
    });
    setContainsValidPersonalEmail(!isInvalidEmail);
  }, [amount]);

  useEffect(() => {
    setContainsEmptyString2(
      paymentData.some((obj) =>
        Object.values(obj).some((value) => value === "")
      )
    );
    const email = paymentData[0]?.email;
    setContainsValidEmail(email?.includes("@") && email?.includes("."));
  }, [paymentData]);

  return (
    <Button
      className="p-5 text-background gap-4 text-xl uppercase w-48  hover:bg-yellowaccent hover:text-background group "
      onClick={() => {
        {
          pageView === 1 && amount.length === 0
            ? setErrorMsg("You must choose at least 1 ticket")
            : pageView === 2 && chosenArea === ""
            ? setErrorMsg("Select a camping area")
            : pageView === 4 && containsEmptyString
            ? setErrorMsg("Please fill out this field")
            : pageView === 4 && !containsValidPersonalEmail
            ? setEmailError("Use a valid e-mail address")
            : pageView === 4 && acceptedTerms === false
            ? setTermsError("You must accept the terms")
            : pageView === 5 && containsEmptyString2
            ? setErrorMsg("Please fill out this field")
            : pageView === 5 && !containsValidEmail
            ? setEmailError("Use a valid e-mail address")
            : (setPageView((o) => o + 1), setErrorMsg(""), setEmailError(""));
        }
      }}
    >
      {pageView === 3 ? "Skip" : pageView === 5 ? "Confirm" : "Next"}
      {pageView < 5 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
        >
          <path
            d="M17.2803 20.7803C16.9874 21.0732 16.5126 21.0732 16.2197 20.7803C15.9593 20.52 15.9304 20.1158 16.1329 19.8235L16.2197 19.7197L22.441 13.5L1.75 13.5C1.33579 13.5 0.999999 13.1642 0.999999 12.75C0.999999 12.3358 1.33579 12 1.75 12L22.4395 12L16.2197 5.78033C15.9268 5.48744 15.9268 5.01256 16.2197 4.71967C16.5126 4.42678 16.9874 4.42678 17.2803 4.71967L24.7803 12.2197L24.8366 12.2825L24.8999 12.3754L24.9627 12.516L24.9918 12.6389L24.9973 12.6858L24.9998 12.7658C24.9992 12.7976 24.9965 12.8294 24.9918 12.8609L25 12.75L24.9958 12.8301L24.9756 12.9403L24.9627 12.9841L24.9148 13.0976L24.8477 13.2031L24.7803 13.2803L17.2803 20.7803Z"
            fill="#222"
            stroke="#222"
            className="group-hover:stroke-background"
          />
        </svg>
      ) : null}
    </Button>
  );
}

export default NextBtn;
