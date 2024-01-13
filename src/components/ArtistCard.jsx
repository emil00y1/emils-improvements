import Image from "next/image";
import Link from "next/link";

function ArtistCard({
  act,
  start,
  end,
  imageSrc,
  slug,
  stage,
  creditText,
  creditLink,
}) {
  const img = imageSrc.startsWith("https")
    ? imageSrc
    : "https://stump-impossible-trail.glitch.me/logos/" + imageSrc;

  return (
    <>
      <Link href={`/lineup/${slug}`} prefetch={false}>
        <article className="bg-extradark rounded-xl flex">
          <Image
            src={img}
            width={100}
            height={100}
            alt={"image of " + act}
            className="aspect-square object-cover rounded-l-xl"
          />
          <div className="p-3 flex w-full gap-3">
            <div className="flex flex-col justify-between">
              <h2 className="uppercase">{act}</h2>
              <p>{stage}</p>
            </div>
            <div className="my-auto ml-auto">
              <p className="text-yellowaccent">{start}</p>
              <p>{end}</p>
            </div>
          </div>
        </article>
      </Link>
      <Link className="text-xs text-lightgrey" href={creditLink}>
        {creditText}
      </Link>
    </>
  );
}

export default ArtistCard;
