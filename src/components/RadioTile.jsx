import { useState } from "react";
function RadioTile({
  area,
  availableSpots,
  spots,
  setChosenArea,
  chosenArea,
  setErrorMsg,
  amount,
  img,
}) {
  const radioChange = (event) => {
    setErrorMsg("");
    setChosenArea(area);
  };

  return (
    <label
      htmlFor={area}
      className={`radio-label cursor-pointer p-5 first:has(checked):border-yellowaccent first:has(disabled):border-red-600 w-full border-foreground border-2 rounded-md flex items-center bg-right bg-contain bg-no-repeat`}
      style={{
        backgroundImage: `url('/img/${img}')`,
        backgroundPosition: "right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <input
        disabled={amount.length > availableSpots}
        type="radio"
        name="area"
        defaultChecked={chosenArea === area && amount.length < availableSpots}
        id={area}
        className="cursor-pointer peer focus:outline-pink-600 accent-yellowaccent mr-6"
        onChange={radioChange}
      />
      <span className="group/info peer-disabled:text-red-600 peer-checked:text-yellowaccent group-hover:text-yellowaccent">
        <span className="block text-lg info">{area}</span>

        <span className="block info">
          {amount.length > availableSpots
            ? "Not enough "
            : `${availableSpots}/${spots} `}
          spots left
        </span>
      </span>
    </label>
  );
}

export default RadioTile;
