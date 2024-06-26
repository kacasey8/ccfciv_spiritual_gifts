import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useRef, useState } from "react";
import { SPIRITUAL_GIFTS_QUESTIONS, translateSpiritualGift } from "../lib/data";
import { scoreGifts } from "@/lib/scoreGifts";
import { Button } from "@/components/ui/button";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";
import SpiritualGiftsQuestionResults from "./SpiritualGiftsQuestionResults";

import { Chart } from "react-google-charts";
import SpiritualGiftsExplanationLink from "./SpiritualGiftsExplanationLink";

type Props = {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    language: "english" | "chinese";
    questions: number[];
  };
  language: "chinese" | "english";
};

export function SpiritualGiftsResults({ values, language }: Props) {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      myRef.current?.scrollIntoView();
    }, 200);
  }, [myRef]); // Empty dependency array ensures this effect runs only once
  const seriesData = scoreGifts(values.questions, language).map((giftScore) => {
    return [`${giftScore.gift} - ${giftScore.score}`, giftScore.score, null];
  });

  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  async function onSubmit() {
    setIsLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, language }),
    });

    setIsLoading(false);
    if (response.status !== 200) {
      toast("Failed to send to email, please try again");
      return;
    }

    setHasSubmitted(true);
  }
  const hydratedQuestions = values.questions.map((answer, index) => {
    const question = SPIRITUAL_GIFTS_QUESTIONS[index];
    return {
      ...question,
      answer,
    };
  });

  const data = [
    [
      "Gift",
      language === "chinese" ? "滿分 25 分" : "Score out of 25",
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ...seriesData,
  ];

  const options = {
    title: language === "chinese" ? "屬靈恩賜" : "Spiritual Gifts",
    chartArea: {
      height: "100%",
      width: "100%",
      top: "16",
      left: "16",
      right: "16",
      bottom: "70",
    },
    legend: { position: "none" },
    vAxis: { title: "", textPosition: "in" },
    bar: { groupWidth: "80%" },
    hAxis: {
      title: language === "chinese" ? "滿分 25 分" : "Score out of 25",
      minValue: 0,
      maxValue: 25,
      viewWindow: {
        min: 0,
        max: 25,
      },
      ticks: [0, 5, 10, 15, 20, 25],
    },
  };

  return (
    <div ref={myRef} className="flex flex-col items-center gap-4">
      <div className="px-4 pt-12">
        <Chart
          chartType="BarChart"
          width="100%"
          height="450px"
          data={data}
          options={options}
        />
      </div>
      <SpiritualGiftsExplanationLink language={language} />
      {hasSubmitted ? (
        <div>
          {language === "chinese" ? "電子郵件發送至" : "Sent to"} {values.email}
        </div>
      ) : isLoading ? (
        <BeatLoader />
      ) : (
        <Button onClick={onSubmit} type="submit">
          {language === "chinese"
            ? "將結果透過電子郵件發送至"
            : "Email results to"}{" "}
          {values.email}
        </Button>
      )}
      <SpiritualGiftsQuestionResults
        language={language}
        hydratedQuestions={hydratedQuestions}
      />
    </div>
  );
}
