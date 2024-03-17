import React from "react";

export default function RumorInput({ rumor, setRumor }) {
  const handleOnChange = (e) => {
    setRumor(e.target.value);
  };

  return (
    <div className="flex flex-col ">
      <textarea
        value={rumor}
        onChange={handleOnChange}
        rows="6"
        cols="50"
        placeholder="please enter a rumor"
        className="hidden lg:flex
        border border-slate-500 rounded-lg p-2 grow text-lg
       text-black placeholder-slate-500 
       focus:outline-none focus:ring-2 focus:ring-primary-light-blue focus:border-transparent transition duration-300 ease-in-out 
       hover:border-primary-light-blue hover:shadow-md"
      />
      <textarea
        value={rumor}
        onChange={handleOnChange}
        rows="4"
        cols="40"
        placeholder="please enter a rumor"
        className="hidden sm:flex lg:hidden
        border border-slate-500 rounded-lg p-2 text-lg
       text-black placeholder-slate-500 
       focus:outline-none focus:ring-2 focus:ring-primary-light-blue focus:border-transparent transition duration-300 ease-in-out 
       hover:border-primary-light-blue hover:shadow-md"
      />
      <textarea
        value={rumor}
        onChange={handleOnChange}
        rows="4"
        cols="25"
        placeholder="please enter a rumor"
        className="flex sm:hidden
        border border-slate-500 rounded-lg p-2 text-lg
       text-black placeholder-slate-500 
       focus:outline-none focus:ring-2 focus:ring-primary-light-blue focus:border-transparent transition duration-300 ease-in-out 
       hover:border-primary-light-blue hover:shadow-md"
      />
    </div>
  );
}
