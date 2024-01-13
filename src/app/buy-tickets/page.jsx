"use client";
import CampingAreas from "@/components/CampingAreas";
import CampingPreference from "@/components/CampingPreference";
import { Button } from "@/components/ui/button";
import PaymentInfo from "@/components/PaymentInfo";
import PersonalInfo from "@/components/PersonalInfo";
import TicketType from "@/components/TicketType";
import { useState } from "react";
import Headline from "@/components/Headline";
import Confirmation from "@/components/Confirmation";
import { Progress } from "@/components/ui/progress";
import NextBtn from "@/components/NextBtn";

function BuyTickets() {
  const [pageView, setPageView] = useState(1);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [chosenArea, setChosenArea] = useState("");
  const [tentTwoAmount, setTentTwoAmount] = useState(0);
  const [tentThreeAmount, setTentThreeAmount] = useState(0);
  const [greenChecked, setGreenChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState("");
  const [reservationId, setReservationId] = useState();
  const [termsError, setTermsError] = useState("");
  const [amount, setAmount] = useState([]);

  const [paymentData, setPaymentData] = useState([
    {
      cardname: "",
      cardnumber: "",
      exdate: "",
      email: "",
      cvc: "",
      addressline1: "",
      zipcode: "",
      city: "",
    },
  ]);

  let reservation = {
    area: `${chosenArea}`,
    amount: amount.length,
  };

  const vipPrice = 1299;
  const standardPrice = 799;

  const ticketData = {
    campingArea: chosenArea,
    twoPersTent: tentTwoAmount,
    threePersTent: tentThreeAmount,
    greenCamping: greenChecked,
    tickets: JSON.stringify(amount),
  };

  let headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5ZXphdWFlY3RhbW9nZ2xrbXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0OTcyODUsImV4cCI6MjAwMDA3MzI4NX0.5CbbGAvqETjhd1_tbVm-oa-4F_JHliJV0Xuy_dG2rms",
    Prefer: "return=representation",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(ticketData);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pageView === 5) {
      console.log(reservationId);
      fetch("https://syezauaectamogglkmvc.supabase.co/rest/v1/foofest", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });
      fetch("https://stump-impossible-trail.glitch.me/fullfill-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: reservationId,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log(reservationId);
        })
        .catch((err) => console.error(err));
    }
    if (pageView === 3) {
      fetch("https://stump-impossible-trail.glitch.me/reserve-spot", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.id);
          setReservationId(data.id);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <main className="m-6 max-w-7xl md:mx-auto md:w-[768px] h-full">
        {pageView === 1 ? (
          <Headline>Choose your tickets</Headline>
        ) : pageView === 2 ? (
          <Headline>Choose camping area</Headline>
        ) : pageView === 3 ? (
          <Headline>camping preferences</Headline>
        ) : pageView === 4 ? (
          <Headline>Personal info</Headline>
        ) : pageView === 5 ? (
          <Headline>Payment info</Headline>
        ) : null}

        <Progress value={pageView * 16.66} className="mb-6" />

        <form onSubmit={handleSubmit}>
          <CampingPreference
            tentTwoAmount={tentTwoAmount}
            setTentTwoAmount={setTentTwoAmount}
            tentThreeAmount={tentThreeAmount}
            setTentThreeAmount={setTentThreeAmount}
            greenChecked={greenChecked}
            setGreenChecked={setGreenChecked}
          />
          {/*       {pageView === 1 ? (
            <TicketType
              setErrorMsg={setErrorMsg}
              errorMsg={errorMsg}
              amount={amount}
              setAmount={setAmount}
              vipPrice={vipPrice}
              standardPrice={standardPrice}
            />
          ) : pageView === 2 ? (
            <CampingAreas
              reservation={reservation}
              chosenArea={chosenArea}
              setChosenArea={setChosenArea}
              setErrorMsg={setErrorMsg}
              errorMsg={errorMsg}
              amount={amount}
            />
          ) : pageView === 3 ? (
            <CampingPreference
              tentTwoAmount={tentTwoAmount}
              setTentTwoAmount={setTentTwoAmount}
              tentThreeAmount={tentThreeAmount}
              setTentThreeAmount={setTentThreeAmount}
              greenChecked={greenChecked}
              setGreenChecked={setGreenChecked}
            />
          ) : pageView === 4 ? (
            <PersonalInfo
              emailError={emailError}
              acceptedTerms={acceptedTerms}
              termsError={termsError}
              setAcceptedTerms={setAcceptedTerms}
              setAmount={setAmount}
              amount={amount}
              errorMsg={errorMsg}
              pageView={pageView}
            />
          ) : pageView === 5 ? (
            <PaymentInfo
              emailError={emailError}
              errorMsg={errorMsg}
              paymentData={paymentData}
              setPaymentData={setPaymentData}
              amount={amount}
              vipPrice={vipPrice}
              standardPrice={standardPrice}
              tentTwoAmount={tentTwoAmount}
              tentThreeAmount={tentThreeAmount}
              greenChecked={greenChecked}
            />
          ) : (
            <Confirmation paymentData={paymentData} amount={amount} />
          )} */}
          <div className="flex items-center my-10 justify-center gap-5">
            {pageView < 6 && pageView > 1 ? (
              <Button
                variant="outline"
                className="p-5 border-yellowaccent"
                onClick={() => {
                  setPageView((o) => o - 1);
                  setErrorMsg("");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="18"
                  viewBox="0 0 26 18"
                  fill="none"
                >
                  <path
                    d="M8.71967 1.21967C9.01256 0.926777 9.48744 0.926777 9.78033 1.21967C10.0407 1.48002 10.0696 1.88416 9.86711 2.17646L9.78033 2.28033L3.559 8.5L24.25 8.5C24.6642 8.5 25 8.83579 25 9.25C25 9.66421 24.6642 10 24.25 10L3.5605 10L9.78033 16.2197C10.0732 16.5126 10.0732 16.9874 9.78033 17.2803C9.48744 17.5732 9.01256 17.5732 8.71967 17.2803L1.21967 9.78033L1.16344 9.71749V9.71749L1.10012 9.62465V9.62465L1.03727 9.48402L1.00817 9.3611V9.3611L1.00273 9.31422V9.31422L1.00017 9.23419C1.00083 9.2024 1.00351 9.17064 1.00819 9.13912L1 9.25L1.00423 9.16986V9.16986L1.02441 9.05974V9.05974L1.03727 9.01587L1.08521 8.90236V8.90236L1.15225 8.79686V8.79686L1.21967 8.71967V8.71967L8.71967 1.21967Z"
                    fill="#FEC90D"
                    stroke="#FEC90D"
                  />
                </svg>
              </Button>
            ) : null}
            {pageView < 6 ? (
              <NextBtn
                setEmailError={setEmailError}
                paymentData={paymentData}
                setTermsError={setTermsError}
                acceptedTerms={acceptedTerms}
                amount={amount}
                setPageView={setPageView}
                pageView={pageView}
                setErrorMsg={setErrorMsg}
                chosenArea={chosenArea}
              />
            ) : null}
          </div>
        </form>
      </main>
    </>
  );
}

export default BuyTickets;
