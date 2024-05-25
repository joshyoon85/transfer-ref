import React from "react";

export default function PredictionDisplay({ prediction }) {
  return (
    <div className="mt-2 text-lg">
      {`This rumor is `}
      <span className="text-xl text-primary-light-blue font-extrabold">{`${prediction}%`}</span>
      <span>{` True!`}</span>
    </div>
  );
}
