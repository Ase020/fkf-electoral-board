import React from "react";
import { Link } from "react-router-dom";

import { arrowRight, topStory } from "../../../assets";

function TopStory() {
  return (
    <div className="border shadow-md rounded-xl w-full p-0 md:p-4 flex flex-col-reverse md:flex-row justify-between gap-4">
      <div className="w-full md:w-1/2 flex justify-between flex-col p-3 gap-3">
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <small className="uppercase text-[#6366F1] font-semibold text-sm">
              Top story
            </small>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              FKF Electoral Board publishes final results from national
              elections{" "}
            </h3>
          </div>

          <span className="text-sm font-normal text-gray-400">
            Oct 19, 2021 • 5min read
          </span>

          <p className="text-sm sm:text-base font-normal line-clamp-5">
            Football Kenya Federation’s Electoral Board has published the final
            results from the national elections held on October 17, 2020. This
            comes after the lapse of a disputes resolution window, provided for
            in the electoral calendar, in accordance with the FKF Electoral
            Code. The list can be accessed through this link:
            https://bit.ly/34o0Xuy
          </p>
        </div>

        <Link
          to="/"
          className="w-fit transition-all duration-500 ease-in flex items-center gap-1 border border-transparent hover:border-primary py-2 px-4 rounded-lg"
        >
          <span className="text-primary text-base font-medium">Read news</span>
          <img src={arrowRight} alt="arrow-right" className="p-2 flex-center" />
        </Link>
      </div>

      <div className="w-full md:w-1/2">
        <img
          src={topStory}
          alt="top-story"
          className="w-full h-full object-cover rounded-t-lg md:rounded-lg"
        />
      </div>
    </div>
  );
}

export default TopStory;
