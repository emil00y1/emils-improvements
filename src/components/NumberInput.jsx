function NumberInput({ setAmount, amount, setErrorMsg }) {
  return (
    <>
      <div className="flex border-2 border-foreground  p-1.5 rounded-md">
        <button
          aria-label="ticket decrease"
          disabled={amount === 0}
          onClick={() => {
            setAmount((old) => old.slice(0, -1));
          }}
        >
          <svg
            className="fill-foreground"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M200-440v-80h560v80H200Z" />
          </svg>
        </button>
        <input
          aria-labelledby="ticketamount"
          disabled
          className="bg-background border-1 w-14 text-center"
          id="tickets"
          type="text"
          readOnly
          value={amount.length}
          tabIndex="-1"
        />

        <button
          aria-label="ticket increase"
          onClick={() => {
            setErrorMsg("");
            setAmount((old) =>
              old.concat({
                firstname: "",
                surname: "",
                email: "",
                phone: "",
                vip: false,
              })
            );
          }}
        >
          <svg
            className="fill-foreground"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default NumberInput;
