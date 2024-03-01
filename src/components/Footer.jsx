import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <section className="bg-primary">
      <footer className="max-width flex-center flex-col gap-14 text-white py-12 px-20">
        <nav className="flex-center flex-col gap-8 font-semibold">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-32 object-contain" />
            <h3 className="uppercase text-lg font-semibold">
              FKF ELECTION BOARD
            </h3>
          </div>

          <ul className="flex items-center gap-8 text-base">
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
            <Link to="/" className="">
              Appeals & Disputes
            </Link>
          </ul>
        </nav>
        <div className="border-t w-full pt-8  flex-between">
          <div className="flex items-center gap-2">
            <p className="">© {year}</p>●<p className="">FKF Electoral Board</p>
            ●<p className="">All Rights Reserved.</p>
          </div>

          <div className="flex items-center capitalize gap-3">
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
