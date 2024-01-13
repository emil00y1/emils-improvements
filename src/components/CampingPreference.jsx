"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import NumberInput2 from "./NumberInput2";
import Divider from "./Divider";
import Optional from "./Optional";

function CampingPreference({
  tentTwoAmount,
  setTentTwoAmount,
  tentThreeAmount,
  setTentThreeAmount,
  greenChecked,
  setGreenChecked,
}) {
  const greenChange = (e) => {
    setGreenChecked(e.target.checked);
  };
  const greenValue = greenChecked === true ? 249 : 0;

  return (
    <>
      <h2 className="text-lg">Support our green initiatives</h2>
      <Optional />
      <div className="flex flex-col gap-6">
        <div className="m-0 p-0">
          <label>
            <input
              className="peer h-0 w-0 opacity-0 focus:outline-none"
              id="greencamping"
              type="checkbox"
              onChange={greenChange}
              defaultChecked={greenChecked}
            />
            <div className="group border-solid border-2 border-foreground rounded cursor-pointer peer-checked:border-yellowaccent  peer-focus-visible:ring  peer-focus-visible:ring-offset-2  peer-checked:text-yellowaccent flex justify-between">
              <div className="flex flex-col m-2 w-full">
                <div className="flex gap-2">
                  Add Green Camping
                  <Popover>
                    <PopoverTrigger>
                      <svg
                        className="fill-foreground opacity-70"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 -960 960 960"
                        width="20"
                      >
                        <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                      </svg>
                    </PopoverTrigger>
                    <PopoverContent className="bg-extradark text-sm" side="top">
                      Green Camping is an optional donation which supports our
                      initiatives for a more green and sustainable future.
                    </PopoverContent>
                  </Popover>
                </div>
                <p className="mt-4">249.00</p>
              </div>

              <div
                className={`w-6 h-6 rounded-bl-xl flex ${
                  greenChecked ? "bg-yellowaccent" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  className="m-auto"
                >
                  <path
                    d="M11.4859 1.56481C11.64 1.40169 11.8971 1.39435 12.0602 1.5484C12.2052 1.68534 12.2271 1.90371 12.122 2.06511L12.0766 2.12269L5.17035 9.43519C5.02549 9.58858 4.79167 9.603 4.62998 9.48041L4.57304 9.42802L0.91679 5.36552C0.766698 5.19875 0.780217 4.94188 0.946987 4.79179C1.09523 4.65837 1.31465 4.65423 1.467 4.77208L1.52072 4.82198L4.8815 8.55663L11.4859 1.56481Z"
                    fill="#222222"
                    stroke="#222222"
                  />
                </svg>
              </div>
            </div>
          </label>
        </div>
        <section className="mt-2">
          <h2 className="text-lg">Add tents to your camping area</h2>
          <Optional />
          <article className="mt-6">
            <div className="flex justify-between items-center">
              <div>
                <p>2 person tent</p>
                <p className="text-sm">299.00</p>
              </div>
              <NumberInput2
                setAmount={setTentTwoAmount}
                amount={tentTwoAmount}
                label="add 2 person tent"
              />
            </div>
          </article>
          <article className="mt-4">
            <div className="flex justify-between items-center">
              <div>
                <p>3 person tent</p>
                <p className="text-sm">399.00</p>
              </div>
              <NumberInput2
                tentSpace="1"
                setAmount={setTentThreeAmount}
                amount={tentThreeAmount}
                label="add 3 person tent"
              />
            </div>
          </article>
        </section>
        <Divider />
        <p className="flex justify-end">
          {299 * tentTwoAmount + 399 * tentThreeAmount + greenValue}
          .00
        </p>
      </div>
    </>
  );
}

export default CampingPreference;
