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
    }, 100);
  }, [myRef]); // Empty dependency array ensures this effect runs only once
  const seriesData = scoreGifts(values.questions, language).map((giftScore) => {
    return [giftScore.gift, giftScore.score, null];
  });
  // const options = {
  //   title: {
  //     text: language === "chinese" ? "屬靈恩賜" : "Spiritual Gifts",
  //   },
  //   chart: {
  //     type: "column",
  //   },
  //   chartOptions: {},
  //   xAxis: {
  //     type: "category",
  //     labels: {
  //       autoRotation: [-45, -90],
  //       style: {
  //         fontSize: "13px",
  //         fontFamily: "Verdana, sans-serif",
  //       },
  //     },
  //   },
  //   legend: {
  //     enabled: false,
  //   },
  //   credits: {
  //     enabled: false,
  //   },
  //   tooltip: {
  //     pointFormat: `${
  //       language === "chinese" ? "滿分 25 分：" : "Score out of 25:"
  //     } <b>{point.y}</b>`,
  //   },
  //   series: [
  //     {
  //       dataSorting: {
  //         enabled: true,
  //       },
  //       data: seriesData,
  //     },
  //   ],
  // };

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
      body: JSON.stringify(values),
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
      "Element",
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
    chartArea: { width: "100%", height: "400px", left: 80 },
    legend: { position: "none" },
    hAxis: {
      title: language === "chinese" ? "滿分 25 分" : "Score out of 25",
      minValue: 0,
      maxValue: 25,
      viewWindow: {
        min: 0,
        max: 25,
      },
    },
  };

  return (
    <div ref={myRef} className="flex flex-col items-center gap-4">
      <div>
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
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
