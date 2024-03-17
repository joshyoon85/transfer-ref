// HW

import React from "react";

export default function IntroText() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl sm:text-4xl font-bold text-primary-light-blue text-center">
        Welcome to Transfer Ref, your destination for separating facts from
        soccer transfer rumors.
      </h1>

      <p className="text-sm sm:text-lg text-center">
        In the fast-paced realm of football rumors, it is challenging to discern
        truth from speculation. That is why we are here. With us, you can
        analyze the latest whispers of player transfers, providing you with
        reliable insights and updates. Transfer Ref is your trusted source for
        information. Say goodbye to uncertainty and dive into the world of
        soccer transfers with confidence.
      </p>
    </div>
  );
}
