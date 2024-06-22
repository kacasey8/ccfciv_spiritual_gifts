import { STRINGS } from "@/lib/data";
import React from "react";

type Props = {
  language: "english" | "chinese";
};

function StickyHeader({ language }: Props) {
  return (
    <div className="sticky top-0 bg-white z-10 w-full">
      <div className="py-4">
        <p className="text-2xl text-bold">
          {STRINGS.responseChoiceLabel[language]}
        </p>
        {STRINGS.choiceInstructions[language].map((instruction) => {
          return (
            <p className="text-xs md:text-sm" key={instruction}>
              {instruction}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default StickyHeader;
