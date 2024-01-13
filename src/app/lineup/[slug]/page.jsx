import Image from "next/image";
import Link from "next/link";
import { caesar } from "@/app/fonts";
import BreadCrumb from "@/components/BreadCrumb";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://stump-impossible-trail.glitch.me/bands/${slug}`
  );

  const data = await res.json();

  return {
    title: data.name,
  };
}

export default async function slug({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://stump-impossible-trail.glitch.me/bands/${slug}`
  );
  const data = await res.json();

  const img = data.logo.startsWith("https")
    ? data.logo
    : "https://stump-impossible-trail.glitch.me/logos/" + data.logo;

  const splitCredit = data.logoCredits
    ? data.logoCredits.split(", https")
    : [null];
  const creditText = splitCredit[0];
  const creditLink = "https" + splitCredit[1];

  return (
    <main className="p-6 h-full md:mx-auto md:w-[642px]">
      <BreadCrumb name={data.name} />
      <div className="grid grid-cols-2 my-4 md:flex">
        <div className="max-w-[200px]">
          <Image
            src={img}
            alt={data.name}
            width="200"
            height="200"
            className="aspect-square object-cover"
          ></Image>
          <Link href={creditLink} className="text-xs text-lightgrey">
            {creditText}
          </Link>
        </div>
        <div className="ml-5">
          <h1 className={caesar.className + " text-3xl text-yellowaccent"}>
            {data.name}
          </h1>
          <p className="text-darkwhite mb-4">{data.genre}</p>
          <ul>
            {data.members.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
      <p>{data.bio}</p>
    </main>
  );
}
