import React from "react";

import { Articles, Green, Hero } from "./section";

function Home() {
  return (
    <section className="mx-auto max-w-7xl">
      <Hero />
      <Green />
      <Articles />
    </section>
  );
}

export default Home;
