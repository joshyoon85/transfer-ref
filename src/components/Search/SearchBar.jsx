"use client";
import React, { useState } from "react";
import VerticalDivider from "../shared/VerticalDivider";
import SearchIcon from "../ui/SearchIcon";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const submitSearchText = () => {
    console.log("Search for: ", searchText);
  };

  return (
    <div className="flex mx-auto min-w-48 max-w-96 rounded-lg border-2 border-primary-blue px-2 py-1 gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="grow focus:outline-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <VerticalDivider />

      <button onClick={submitSearchText}>
        <SearchIcon />
      </button>
    </div>
  );
}
