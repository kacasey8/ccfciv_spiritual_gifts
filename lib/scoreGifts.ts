import { sum } from "lodash";
import { SPIRITUAL_GIFTS_QUESTIONS, SpiritualGifts } from "./data";

export function scoreGifts(questions: number[]) {
  const gifts = Object.values(SpiritualGifts);
  const hydratedQuestions = questions.map((answer, index) => {
    const question = SPIRITUAL_GIFTS_QUESTIONS[index];
    return {
      ...question,
      answer,
    };
  });
  return gifts
    .map((gift) => {
      return {
        gift,
        score: sum(
          hydratedQuestions
            .filter((question) => question.gift === gift)
            .map((question) => question.answer)
        ),
      };
    })
    .sort((a, b) => b.score - a.score);
}
