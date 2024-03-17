import IntroText from "@/components/Home/IntroText";
import RumorForm from "@/components/Home/RumorForm";
import RumorInput from "@/components/Home/RumorInput";
import SubmitButton from "@/components/Home/SubmitButton";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import React from "react";

// Search Bar: player’s name, team
// 	-> search result: player’s transfer rumors (list)
// Input Box: text + image (rumor)
// Button: submit
// Text: Simple website description

// Text
// Input Box
// Button

export default function HomePage() {
  return (
    <section className="h-full flex flex-col justify-center items-center gap-6 py-6">
      <div className="px-4">
        <IntroText />
      </div>

      <div className="px-1">
        <RumorForm />
      </div>

      {/* <LoadingSpinner /> */}
    </section>
  );
}
