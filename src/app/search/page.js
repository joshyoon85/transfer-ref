// Search Bar: player’s name, team
// 	-> search result: player’s transfer rumors (card view)

import ResultGrid from "@/components/Search/ResultGrid";
import SearchBar from "@/components/Search/SearchBar";
import React from "react";

export default function SearchPage() {
  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <div className="px-10 w-full ">
        <SearchBar />
      </div>

      <div className="px-2">
        <ResultGrid />
      </div>
    </div>
  );
}
