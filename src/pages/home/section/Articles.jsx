import React from "react";
import TopStory from "./TopStory";
import ArticleCard from "./ArticleCard";

function Articles() {
  return (
    <div className="max-width px-6 sm:px-10 md:px-20 py-6 md:py-10 flex flex-col items-center gap-10">
      <TopStory />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Array.from({ length: 11 }).map((_, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
