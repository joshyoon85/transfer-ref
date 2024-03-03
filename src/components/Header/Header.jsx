import React from "react";
import WebsiteName from "./WebsiteName";
import NavBar from "./NavBar";

// 1. Website Name: Transfer Ref (primary blue)
// 2. Nav Bar: Home (input text box), Explore (search page), Contact

export default function Header() {
  // flex: x방향 정렬
  // flex flex-col: y방향 정렬
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div>
        <WebsiteName />
      </div>

      <div>
        <NavBar />
      </div>
    </div>
  );
}
