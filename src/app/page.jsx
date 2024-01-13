"use client";
import { Button } from "@/components/ui/button";
import { caesar } from "./fonts";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={caesar.className}>
        <Marquee className="overflow-hidden">
          <p className="text-9xl pl-9">
            2024 FOOFEST 2024 FOOFEST 2024 FOOFEST
          </p>
        </Marquee>
        <Marquee className="overflow-hidden" direction="right">
          <p className="text-9xl pl-9">
            <span className="text-yellowaccent"> FOOFEST</span> 2024{" "}
            <span className="text-yellowaccent"> FOOFEST</span> 2024{" "}
            <span className="text-yellowaccent"> FOOFEST</span> 2024
          </p>
        </Marquee>
        <Marquee className="overflow-hidden">
          <p className="text-9xl pl-9">
            {" "}
            FOOFEST 2024 FOOFEST 2024 FOOFEST 2024
          </p>
        </Marquee>
      </div>
      <main className="h-full m-6 max-w-7xl md:mx-auto">
        <h1 className="text-4xl font-black text-center">MUSIC FESTIVAL</h1>
        <p className="text-3xl font-black text-center">7 DAYS, 24/7</p>
        <div className="flex flex-col gap-4 my-10">
          <Link href="/buy-tickets" className="text-background w-52 m-auto">
            <Button
              tabIndex="-1"
              className="hover:bg-amber-200 py-2 w-52 block hover:scale-105 delay-75 button-delay"
            >
              TICKETS
            </Button>
          </Link>
          <Link
            href="/lineup"
            className="text-yellowaccent hover:text-background w-52 m-auto"
          >
            <Button
              tabIndex="-1"
              variant="outline"
              className="hover:bg-amber-200 focus:bg-yellowaccent border-yellowaccent py-2 text-yellowaccent w-52 block hover:scale-105 delay-75 button-delay"
            >
              LINEUP
            </Button>
          </Link>
        </div>
        <article className="flex flex-col gap-3 pb-4">
          <h2 className="font-bold">ABOUT FOOFEST</h2>
          <p>
            Our week-long 24/7 festival brings together a diverse lineup of
            artists for an unforgettable experience.
          </p>
          <p>
            Camp under the stars, enjoy top-notch facilities, and immerse
            yourself in the rhythm of the music.
          </p>
          <p>Join us for a down-to-earth celebration at this year’s Foofest.</p>
        </article>
      </main>
    </>
  );
}
