"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

const STRINGS = {
  title: {
    english: "Spiritual Gifts Survey",
    chinese: "屬靈恩賜問卷",
  },
  overview: {
    english:
      "This is not a test, so there are no wrong answers. The Spiritual Gifts Survey consists of statements. Some items reflect concrete actions; other items are descriptive traits; and still others are statements of belief.",
    chinese:
      "這不是考試，所以沒有錯誤答案。本屬靈恩賜​​問卷包括80條題目。有些反映你的行動，有些描述你的特質，還有些則是關於你的信仰。",
  },
  specificInstructions: {
    english: [
      "Select one response you feel best characterizes yourself and place a that number in the blank provided. Or use the slider to select the number.",
      "Do not spend too much time on any one item  Remember, it is not a test  Usually your immediate response is best",
      "Please give an answer for each item. Do not skip any items",
      "Do not ask others how they are answering or how they think you should answer",
      "Work at your own pace",
      "The responses recorded here will not be shared outside of CCFCIV Elders and Deacons and Ministry Leaders and will only be used for the purposes of ministry.",
    ],
    chinese: [
      "請按你對題目的反應，在旁邊的空白位置填下適當的數字。",
      "不要花太多時間在任何一條題目。你即時的反應永遠是最好的。",
      "請回答所有問題，不要跳過任何題目。",
      "作答期間不要與人談話，請自己作答。",
      "按照自己的節奏作答。",
      "此處記錄的回答僅用於事工目的，不會與長老、執事和事工領袖以外的任何人分享。",
    ],
  },
  responseChoiceLabel: {
    english: "Your response choices are:",
    chinese: "您的回应选择是：",
  },
  choiceInstructions: {
    english: [
      "5 — Highly characteristic of me/definitely true for me",
      "4 — Most of the time this would describe me/be true for me",
      "3 — Frequently characteristic of me/true for me–about 50 percent of the time",
      "2 — Occasionally characteristic of me/true for me–about 25 percent of the time",
      "1 — Not at all characteristic of me/definitely untrue for me",
    ],
    chinese: [
      "5 - 完全同意/ 正確地描述自己",
      "4 - 大部份同意",
      "3 - 有時同意/ 有50%時間正在描述自己",
      "2 - 很少同意/ 有25%時間正在描述自己",
      "1 - 絕不同意/ 並不是真實的我",
    ],
  },
};

type Props = {
  language: "english" | "chinese";
  setLanguage: (language: "english" | "chinese") => void;
};

export function Instructions({ language, setLanguage }: Props) {
  return (
    <div className="flex flex-col py-8">
      <RadioGroup
        className="flex flex-row py-4"
        onValueChange={setLanguage}
        value={language}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="english" id="english" />
          <Label htmlFor="english">English</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="chinese" id="chinese" />
          <Label htmlFor="chinese">Chinese</Label>
        </div>
      </RadioGroup>
      <h1 className="text-4xl text-bold text-center">
        {STRINGS.title[language]}
      </h1>
      <p className="text-sm py-4">{STRINGS.overview[language]}</p>
      <div className="px-4 text-sm">
        {STRINGS.specificInstructions[language].map((instruction) => {
          return <li key={instruction}>{instruction}</li>;
        })}
      </div>
      <br />
      <p className="text-2xl text-bold py-2">
        {STRINGS.responseChoiceLabel[language]}
      </p>
      {STRINGS.choiceInstructions[language].map((instruction) => {
        return (
          <p className="text-sm" key={instruction}>
            {instruction}
          </p>
        );
      })}
    </div>
  );
}
