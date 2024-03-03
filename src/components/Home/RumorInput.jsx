import React from "react";

export default function RumorInput({ rumor, setRumor }) {
  const handleOnChange = (e) => {
    setRumor(e.target.value);
  };

  return (
    <textarea
      value={rumor}
      onChange={handleOnChange}
      rows="6"
      cols="50"
      placeholder="please enter a rumor"
      className="border border-slate-500 rounded-lg p-2 grow text-lg
       text-black placeholder-slate-500 
       focus:outline-none focus:ring-2 focus:ring-primary-light-blue focus:border-transparent transition duration-300 ease-in-out 
       hover:border-primary-light-blue hover:shadow-md"
    />
  );
}
