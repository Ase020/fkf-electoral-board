import React from "react";
import TopStory from "./TopStory";
import ArticleCard from "./ArticleCard";

function Articles() {
  return (
    <div className="border px-20 py-10 flex flex-col items-center gap-10">
      <TopStory />

      <div className="w-full grid grid-cols-3 gap-8">
        {Array.from({ length: 11 }).map((_, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
