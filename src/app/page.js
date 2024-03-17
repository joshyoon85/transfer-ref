import IntroText from "@/components/Home/IntroText";
import RumorForm from "@/components/Home/RumorForm";
import RumorInput from "@/components/Home/RumorInput";
import SubmitButton from "@/components/Home/SubmitButton";
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
    <section className="h-full flex flex-col justify-center items-center gap-6">
      <div>
        <IntroText />
      </div>

      <div>
        <RumorForm />
      </div>
    </section>
  );
}
