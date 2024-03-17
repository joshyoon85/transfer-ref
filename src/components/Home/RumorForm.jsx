"use client";

import React, { useState } from "react";
import RumorInput from "./RumorInput";
import SubmitButton from "./SubmitButton";

export default function RumorForm() {
  const [rumor, setRumor] = useState("");

  return (
    <div className="flex flex-col items-center gap-2 py-2 mb-4">
      <RumorInput rumor={rumor} setRumor={setRumor} />

      <SubmitButton rumor={rumor} />
    </div>
  );
}
