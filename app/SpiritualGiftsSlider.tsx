"use client";

import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const MARKS = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };

type Props = {
  onChange: (value: number | number[]) => void;
  value: number | undefined | null;
};

export function SpiritualGiftsSlider({ onChange, value }: Props) {
  return (
    <div className="flex-1">
      <Slider
        min={1}
        max={5}
        marks={MARKS}
        step={1}
        onChange={onChange}
        //@ts-ignore
        value={value ?? null}
      />
    </div>
  );
}
