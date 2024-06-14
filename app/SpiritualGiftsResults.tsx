import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { SPIRITUAL_GIFTS_QUESTIONS, SpiritualGifts } from "../lib/data";
import { sum } from "lodash";
import { scoreGifts } from "@/lib/scoreGifts";

type Props = {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    questions: number[];
  };
};

export function SpiritualGiftsResults({ values }: Props) {
  const seriesData = scoreGifts(values.questions).map((giftScore) => {
    return [giftScore.gift, giftScore.score];
  });
  const options = {
    title: {
      text: "Spiritual Gifts",
    },
    chart: {
      type: "column",
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [-45, -90],
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Score out of 25: <b>{point.y}</b>",
    },
    series: [
      {
        dataSorting: {
          enabled: true,
        },
        data: seriesData,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
