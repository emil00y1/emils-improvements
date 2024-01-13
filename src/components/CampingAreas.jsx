"use client";
import { React, useEffect, useState } from "react";
import RadioTile from "@/components/RadioTile";
import { ClipLoader } from "react-spinners";

async function fetchFunc() {
  const res = await fetch(
    "https://stump-impossible-trail.glitch.me/available-spots"
  );
  const data = await res.json();
  return data;
}

function CampingAreas({
  reservation,
  chosenArea,
  setChosenArea,
  errorMsg,
  setErrorMsg,
  amount,
}) {
  const [campingArea, setCampingArea] = useState([]);

  useEffect(() => {
    const x = async () => {
      const data = await fetchFunc();
      setCampingArea(data);
    };
    x();
    x;
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {errorMsg !== "" ? (
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
      <div className="flex flex-col gap-3 items-center">
        <ClipLoader size="70" color="#fec90b" />
        {/*  {campingArea.length === 0 ? (
          <ClipLoader />
        ) : (
          campingArea.map((spot) => (
            <RadioTile
              reservation={reservation}
              amount={amount}
              setErrorMsg={setErrorMsg}
              key={spot.area}
              area={spot.area}
              spots={spot.spots}
              availableSpots={spot.available}
              img={spot.img}
              setChosenArea={setChosenArea}
              chosenArea={chosenArea}
            />
          ))
        )} */}
      </div>
    </div>
  );
}

export default CampingAreas;
