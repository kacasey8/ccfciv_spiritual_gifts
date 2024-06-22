"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { STRINGS } from "@/lib/data";
import React from "react";

type Props = {
  language: "english" | "chinese";
  setLanguage: (language: "english" | "chinese") => void;
};

export function Instructions({ language, setLanguage }: Props) {
  return (
    <div className="flex flex-col pt-8">
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
      <p className="text-2xl text-bold pt-8">
        {STRINGS.responseChoiceLabel[language]}
      </p>
    </div>
  );
}
