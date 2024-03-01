import React from "react";
import { hero } from "../../../assets";

const linksData = [
  {
    id: 1,
    title: "Polling agents declaration forms",
    link: "/",
  },
  {
    id: 2,
    title: "County elections- Preliminary results",
    link: "/",
  },
  {
    id: 3,
    title: "Electoral rules & guidelines",
    link: "/",
  },
  {
    id: 4,
    title: "Electoral rules & guidelines",
    link: "/",
  },
];

function Hero() {
  return (
    <div className="flex items-center w-full gap-10">
      <aside className="w-1/2 flex flex-col gap-12 px-4">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-semibold">Election results out</h1>

          <p className="text-2xl font-normal leading-normal">
            Electoral Board has published the final results from the national
            elections held on October 17, 2020. This comes after the lapse of a
            disputes resolution window, provided for in the {" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4E97FD] underline underline-offset-2"
            >
              electoral calendar
            </a>
          </p>

          <button
            type="button"
            className="bg-red-600 text-white py-3 px-5 rounded-lg uppercase text-sm font-semibold w-fit"
          >
            final results
          </button>
        </div>

        <div className="flex flex-col gap-5 py-6">
          <h3 className="text-xl font-semibold">Important links</h3>

          <div className="grid grid-cols-2 gap-6 px-4">
            {linksData.map((link) => (
              <ImportantLink key={link.id} linkData={link} />
            ))}
          </div>
        </div>
      </aside>

      <aside className="w-1/2 p-8">
        <img src={hero} alt="hero" className="w-full object-cover" />
      </aside>
    </div>
  );
}

function ImportantLink({ linkData }) {
  const { title, link } = linkData;
  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary h-5 w-1.5" />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 text-primary text-base font-normal line-clamp-1"
      >
        {title}
      </a>
    </div>
  );
}

export default Hero;
