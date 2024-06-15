import { sum } from "lodash";
import {
  SPIRITUAL_GIFTS_QUESTIONS,
  SpiritualGifts,
  translateSpiritualGift,
} from "./data";

export function scoreGifts(
  questions: number[],
  language: "english" | "chinese"
) {
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
        gift: translateSpiritualGift(language, gift),
        score: sum(
          hydratedQuestions
            .filter((question) => question.gift === gift)
            .map((question) => question.answer)
        ),
      };
    })
    .sort((a, b) => b.score - a.score);
}
