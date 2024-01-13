function RadioSwitch({ ticket, amount, setAmount, ticketIndex, setChecked }) {
  /* AI anvendt til at lave toggleVipStatus funktion */
  const toggleVipStatus = (newVipStatus) => {
    const updatedAmount = amount.map((item, index) => {
      if (index === ticketIndex) {
        return { ...item, vip: newVipStatus };
      }
      return item;
    });

    setAmount(updatedAmount);
  };

  return (
    <>
      <fieldset className="inline">
        <div className="flex border-2 rounded-md border-yellowaccent">
          <div className="flex items-center">
            <input
              defaultChecked={!amount[ticketIndex].vip}
              type="radio"
              name={ticket}
              id={ticket + "standard"}
              className="peer h-0 w-0 opacity-0 focus:outline-none"
              defaultValue="standard"
            />
            <label
              htmlFor={ticket + "standard"}
              className="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-focus-visible:ring  peer-focus-visible:ring-offset-2 p-1.5 peer-checked:text-background"
              onClick={() => {
                toggleVipStatus(false);
              }}
            >
              Standard
            </label>
          </div>
          <div className="flex items-center">
            <input
              defaultChecked={amount[ticketIndex].vip}
              type="radio"
              name={ticket}
              id={ticket + "vip"}
              className="peer h-0 w-0 opacity-0 focus:outline-none"
              defaultValue="vip"
            />
            <label
              htmlFor={ticket + "vip"}
              className="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-focus-visible:ring  peer-focus-visible:ring-offset-2 p-1.5 peer-checked:text-background"
              onClick={() => {
                toggleVipStatus(true);
              }}
            >
              VIP
            </label>
          </div>
        </div>
      </fieldset>
    </>
  );
}

export default RadioSwitch;
