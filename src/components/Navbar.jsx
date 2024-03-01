import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";

function Navbar() {
  return (
    <header className="border-b h-20">
      <div className="mx-auto w-full h-full max-w-7xl flex-between">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 object-contain" />
        </Link>

        <nav className="flex-between gap-8 pr-8 text-base font-semibold">
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
      </div>
    </header>
  );
}

export default Navbar;
