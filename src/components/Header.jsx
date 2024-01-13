"use client";
import Image from "next/image";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Footer from "./Footer";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDrawer();
    }
  };

  return (
    <header className="flex flex-row justify-between p-4">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width="50" height="50"></Image>
      </Link>
      <div className="flex self-center">
        <svg onKeyDown={handleKeyDown} tabIndex={0} onClick={toggleDrawer} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28" fill="none">
          <g filter="url(#filter0_d_93_211)">
            <path d="M2 2H31" stroke="#C8C8C8" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 13H31" stroke="#C8C8C8" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 24H31" stroke="#C8C8C8" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
        <Drawer style={{ backgroundColor: "hsl(var(--extra-dark))" }} open={isOpen} onClose={toggleDrawer} direction="right">
          <div className="h-full flex flex-col">
            <div className="flex m-6 justify-end">
              <svg onKeyDown={handleKeyDown} tabIndex={0} onClick={toggleDrawer} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M2.5 26L26.5 2" stroke="#C8C8C8" strokeWidth="3" strokeLinecap="round" />
                <path d="M2 2L26 26" stroke="#C8C8C8" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-8 mt-12">
              <Link className="text-2xl uppercase" href="/" onClick={toggleDrawer}>
                Home
              </Link>
              <Link className="text-2xl uppercase" href="/buy-tickets" onClick={toggleDrawer}>
                Tickets
              </Link>
              <Link className="text-2xl uppercase" href="/lineup" onClick={toggleDrawer}>
                Lineup
              </Link>
            </div>
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
}

export default Header;
