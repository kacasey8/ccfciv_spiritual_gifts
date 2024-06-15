import { Question } from "@/lib/data";
import React from "react";

type HydratedQuestion = {
  answer: number;
} & Question;

type Props = {
  language: "chinese" | "english";
  hydratedQuestions: HydratedQuestion[];
};

function SpiritualGiftsQuestionResults({ language, hydratedQuestions }: Props) {
  return (
    <>
      <h3>{language === "chinese" ? "問題：" : "Questions:"}</h3>
      <ol>
        {hydratedQuestions.map((question, index) => (
          <li key={index}>
            <b>{question.question[language]}</b>
            <p>
              {language === "chinese" ? "您的答案：" : "Your answer:"}{" "}
              {question.answer}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default SpiritualGiftsQuestionResults;
