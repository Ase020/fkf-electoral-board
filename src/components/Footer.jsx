import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <section className="bg-primary">
      <footer className="max-width flex-center flex-col gap-14 text-white py-4 sm:py-7 md:py-12 px-3 sm:px-10 md:px-20">
        <nav className="flex-center flex-col w-full gap-8 font-semibold">
          <div className="flex-center w-full gap-2 flex-col md:flex-row">
            <img src={logo} alt="logo" className="w-32 object-contain" />
            <h3 className="uppercase text-lg font-semibold">
              FKF ELECTION BOARD
            </h3>
          </div>

          <ul className="grid grid-cols-2 md:flex-center w-full gap-4 md:gap-8 text-base">
            <Link to="/" className="">
              About Us
            </Link>
            <Link to="/" className="">
              Contact Us
            </Link>
            <Link to="/" className="">
              FKF Constitution
            </Link>
            <Link to="/" className="">
              FKF Electoral code
            </Link>
            <Link to="/" className="col-span-2">
              Appeals & Disputes
            </Link>
          </ul>
        </nav>
        <div className="border-t w-full pt-4 md:pt-8 flex md:flex-between gap-3 flex-col md:flex-row">
          <div className="flex items-center justify-center md:justify-between gap-5">
            <p className="">© {year} </p>
            <p className="">FKF Electoral Board </p>
            <p className="">All Rights Reserved</p>
          </div>

          <div className="flex items-center justify-between capitalize gap-3 w-full md:w-fit">
            <p className="cursor-pointer">terms</p>
            <p className="cursor-pointer">privacy</p>
            <p className="cursor-pointer">cookies</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
