function NumberInput({ tentSpace, amount, setAmount, label }) {
  return (
    <>
      <div className="flex border-2 border-foreground p-1.5 rounded-md">
        <button
          disabled={amount === 0}
          onClick={() => {
            setAmount((old) => old - 1);
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
        <label htmlFor={tentSpace} className="w-0 h-0 opacity-0">
          {label}
        </label>
        <input
          className="bg-background border-1 w-14 text-center"
          disabled
          id={tentSpace}
          type="text"
          readOnly
          value={amount}
          tabIndex="-1"
        />

        <button
          onClick={() => {
            setAmount((old) => old + 1);
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
