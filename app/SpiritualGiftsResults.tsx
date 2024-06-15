import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useState } from "react";
import { SPIRITUAL_GIFTS_QUESTIONS, SpiritualGifts } from "../lib/data";
import { sum } from "lodash";
import { scoreGifts } from "@/lib/scoreGifts";
import { Button } from "@/components/ui/button";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";

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
  return (
    <div className="flex flex-col items-center gap-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
      {hasSubmitted ? (
        <div>Sent to {values.email}</div>
      ) : isLoading ? (
        <BeatLoader />
      ) : (
        <Button onClick={onSubmit} type="submit">
          Email results to {values.email}
        </Button>
      )}
    </div>
  );
}
