import { caesar } from "@/app/fonts";

function Headline({ children }) {
  return <h1 className={caesar.className + " text-3xl text-center my-10"}>{children}</h1>;
}

export default Headline;
