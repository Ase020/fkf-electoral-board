import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { logo } from "../assets";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b h-20 relative">
      <div className="mx-auto w-full h-full max-w-7xl flex-between">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 md:w-32 object-contain" />
        </Link>

        <nav className="hidden md:flex-between gap-8 pr-8 text-base font-semibold">
          <Link to="/" className="text-primary underline underline-offset-4">
            Home
          </Link>
          <Link to="/" className="text-primary">
            Final Results
          </Link>
          <Link to="/" className="text-primary">
            Final Voter Register
          </Link>
          <Link to="/" className="text-primary">
            FKF Constitution
          </Link>
        </nav>

        <div className="flex-center md:hidden mr-3 px-1">
          {isOpen ? (
            <CloseRoundedIcon
              fontSize="large"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          ) : (
            <MenuRoundedIcon
              fontSize="large"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
        </div>

        <div
          className="absolute top-20 left-0 bg-white h-[calc(100vh-80px)] w-screen flex-center flex-col gap-12 text-3xl"
          style={isOpen ? { display: "flex" } : { display: "none" }}
        >
          <Link
            to="/"
            className="text-primary underline underline-offset-4"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-primary"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Final Results
          </Link>
          <Link
            to="/"
            className="text-primary"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Final Voter Register
          </Link>
          <Link
            to="/"
            className="text-primary"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            FKF Constitution
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
