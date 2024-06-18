import React from "react";

type Props = {
  language: "chinese" | "english";
};

function SpiritualGiftsExplanationLink({ language }: Props) {
  return (
    <a
      href="https://youngadults.lifeway.com/wp-content/uploads/downloads/UnderstandingSpiritualGifts_List.pdf"
      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
      target="_blank"
    >
      {language === "chinese" ? "解释" : "Explanation"}
    </a>
  );
}

export default SpiritualGiftsExplanationLink;
