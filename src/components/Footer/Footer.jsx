"use client";

// HW
import React from "react";
import GithubIcon from "../ui/GithubIcon";

// 1. website name
// 2. contact information
// 3. github? - react icons

export default function Footer() {
  const navigateToGithub = () => {
    window.open("https://github.com/soccer-rumor-app/transfer-ref");
  };

  return (
    <div
      className="flex flex-col items-center py-6
     bg-black text-white text-sm gap-2"
    >
      {/* Website name + GitHub */}
      <div className="flex items-center gap-3">
        <p className="font-bold">Transfer Ref</p>

        <button onClick={navigateToGithub}>
          <GithubIcon />
        </button>
      </div>

      {/* Contact (email) */}
      <p className="text-slate-300">joshuayoon0805@gmail.com</p>

      {/* Copyright Text */}
      <p>© 2024 Joshua Yoon</p>
    </div>
  );
}
