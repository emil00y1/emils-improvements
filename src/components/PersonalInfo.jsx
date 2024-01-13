import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function PersonalInfo({
  amount,
  setAmount,
  errorMsg,
  pageView,
  setAcceptedTerms,
  acceptedTerms,
  termsError,
  emailError,
}) {
  /* AI anvendt til at opdatere handleCHange funktion, til at rette de korrekte tickets */
  const handleChange = (index) => (e) => {
    const name = e.target.name.split("-")[0];
    const updatedTickets = [...amount];
    updatedTickets[index] = {
      ...updatedTickets[index],
      [name]: e.target.value,
    };
    setAmount(updatedTickets);
  };

  return (
    <>
      <div className="flex flex-col gap-8 mb-4">
        <div className="flex flex-col gap-10 md:grid grid-cols-2">
          {amount.map((ticket, index) => (
            <div className="flex flex-col gap-5" key={index}>
              <div>
                <p className="text-xl">Ticket {index + 1}</p>
                <p className="text-sm opacity-70">
                  {ticket.vip ? "VIP Ticket" : "Standard Ticket"}
                </p>
              </div>
              <fieldset className="flex flex-col gap-2">
                <div className="flex gap-5">
                  <div>
                    <Label htmlFor={"firstname" + index}>Firstname</Label>
                    <Input
                      type="text"
                      id={"firstname" + index}
                      name={"firstname-" + index}
                      value={ticket.firstname}
                      onChange={handleChange(index)}
                    />
                    {ticket.firstname === "" && errorMsg !== "" ? (
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
                    <Label htmlFor={"surname" + index}>Surname</Label>
                    <Input
                      type="text"
                      id={"surname" + index}
                      name={"surname-" + index}
                      value={ticket.surname}
                      onChange={handleChange(index)}
                    />
                    {ticket.surname === "" && errorMsg !== "" ? (
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
                <div>
                  <Label htmlFor={"email" + index}>E-mail</Label>
                  <Input
                    type="text"
                    id={"email" + index}
                    name={"email-" + index}
                    value={ticket.email}
                    onChange={handleChange(index)}
                  />
                  {ticket.email === "" && errorMsg !== "" ? (
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
                  (!ticket.email?.includes("@") ||
                    !ticket.email?.includes(".")) ? (
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
                  <Label htmlFor={"phone" + index}>Phone</Label>
                  <Input
                    type="tel"
                    id={"phone" + index}
                    name={"phone-" + index}
                    value={ticket.phone}
                    onChange={handleChange(index)}
                  />
                  {ticket.phone === "" && errorMsg !== "" ? (
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
              </fieldset>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <Checkbox
          defaultChecked={acceptedTerms}
          onCheckedChange={() => {
            setAcceptedTerms((old) => !old);
          }}
        />
        <Label>Accept terms and conditions</Label>
      </div>
      {acceptedTerms === false && termsError !== "" ? (
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
          {termsError}
        </p>
      ) : null}
    </>
  );
}

export default PersonalInfo;
