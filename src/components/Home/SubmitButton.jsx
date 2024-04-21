import { verifyRumor } from "@/services/verify";
import React from "react";

export default function SubmitButton({ rumor }) {
  const submitRumor = async () => {
    console.log("submitted rumor: ", rumor);

    // TODO: send the rumor to the server
    const data = {
      text: [rumor],
    };
    const res = await verifyRumor(data);

    console.log("response: ", res);
    return;
  };

  return (
    <button
      type="submit"
      className="bg-primary-light-blue text-white rounded-lg py-2 px-3 text-lg
        focus:outline-none focus:ring-2 focus:ring-primary-light-blue focus:border-transparent transition duration-300 ease-in-out 
        hover:bg-primary-dark-blue"
      onClick={submitRumor}
    >
      Submit
    </button>
  );
}
