"use client";

import React, { useState } from "react";
import RumorInput from "./RumorInput";
import SubmitButton from "./SubmitButton";
import PredictionDisplay from "./PredictionDisplay";

export default function RumorForm() {
  const [rumor, setRumor] = useState("");
  const [prediction, setPrediction] = useState("");

  return (
    <div className="flex flex-col items-center gap-2 py-2 mb-4">
      <RumorInput rumor={rumor} setRumor={setRumor} />

      <SubmitButton rumor={rumor} setPrediction={setPrediction} />

      {prediction.length > 0 && <PredictionDisplay prediction={prediction} />}
    </div>
  );
}
