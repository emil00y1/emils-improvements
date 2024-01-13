import { useState } from "react";
import RadioSwitch from "./RadioSwitch";

function TicketOptions({ ticket, vip, amount, setAmount, ticketIndex }) {
  return (
    <div className="flex justify-between">
      <p>
        Ticket {ticket} - {amount[ticketIndex].vip ? "1299.00" : "799.00"}
      </p>
      <RadioSwitch
        amount={amount}
        setAmount={setAmount}
        ticketIndex={ticketIndex}
        ticket={ticket}
        vip={vip}
      />
    </div>
  );
}

export default TicketOptions;
