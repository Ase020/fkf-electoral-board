import React from "react";
import { aboutUs } from "../../../assets";

function AboutUs() {
  return (
    <div className="bg-[#F6FFF8]">
      <div className="max-width flex-between flex-col-reverse md:flex-row gap-10 md:gap-20 pt-10 sm:p-10 md:p-20">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 p-3 md:p-0 mb-4 md:mb-0">
          <h3 className="text-primary text-3xl font-medium">About Us</h3>

          <p className="text-base font-normal text-center md:text-left">
            The FKF Electoral Board was constituted by the FKF National
            Executive Committee, as provided for in Article 39 Clause 1p of the
            FKF Constitution. It will be in place for four years effective
            January 28, 2020, following its ratification and adoption at the
            January 2020 Special General Meeting.
            <br />
            <br />
            The Board will oversee National and County Elections, and may
            appoint an individual or institution to oversee sub-county
            elections.{" "}
          </p>

          <button
            type="button"
            className="capitalize bg-primary w-full md:w-fit text-white border border-transparent px-4 py-2 rounded-lg transition-all duration-500 ease-in hover:border-primary hover:bg-transparent hover:text-primary"
          >
            Read more
          </button>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img
            src={aboutUs}
            alt="board_members"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
