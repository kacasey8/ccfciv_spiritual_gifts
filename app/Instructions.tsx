import React from "react";

const STRINGS = {
  title: {
    en: "Spiritual Gifts Survey",
    ch: "屬靈恩賜問卷",
  },
  overview: {
    en: "This is not a test, so there are no wrong answers. The Spiritual Gifts Survey consists of statements. Some items reflect concrete actions; other items are descriptive traits; and still others are statements of belief.",
  },
  specificInstructions: {
    en: [
      "Select one response you feel best characterizes yourself and place a that number in the blank provided. Or use the slider to select the number.",
      "Do not spend too much time on any one item  Remember, it is not a test  Usually your immediate response is best",
      "Please give an answer for each item. Do not skip any items",
      "Do not ask others how they are answering or how they think you should answer",
      "Work at your own pace",
      "The responses recorded here will not be shared outside of CCFCIV Elders and Deacons and Ministry Leaders and will only be used for the purposes of ministry.",
    ],
  },
  responseChoiceLabel: {
    en: "Your response choices are:",
  },
  choiceInstructions: {
    en: [
      "5 — Highly characteristic of me/definitely true for me",
      "4 — Most of the time this would describe me/be true for me",
      "3 — Frequently characteristic of me/true for me–about 50 percent of the time",
      "2 — Occasionally characteristic of me/true for me–about 25 percent of the time",
      "1 — Not at all characteristic of me/definitely untrue for me",
    ],
  },
};

export function Instructions() {
  const language = "en";
  return (
    <div className="py-8">
      <h1 className="text-4xl text-bold text-center">
        {STRINGS.title[language]}
      </h1>
      <p className="text-sm py-4">{STRINGS.overview[language]}</p>
      <div className="px-4 text-sm">
        {STRINGS.specificInstructions[language].map((instruction) => {
          return <li>{instruction}</li>;
        })}
      </div>
      <br />
      <p className="text-lg text-semibold py-2">{STRINGS.responseChoiceLabel[language]}</p>
      {STRINGS.choiceInstructions[language].map((instruction) => {
        return <p className="text-sm">{instruction}</p>;
      })}
    </div>
  );
}
