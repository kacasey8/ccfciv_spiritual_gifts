import SpiritualGiftsQuestionResults from "@/app/SpiritualGiftsQuestionResults";
import { SPIRITUAL_GIFTS_QUESTIONS } from "@/lib/data";
import { scoreGifts } from "@/lib/scoreGifts";

type EmailTemplateProps = {
  firstName: string;
  lastName: string;
  email: string;
  language: "english" | "chinese";
  questions: number[];
};

export function EmailTemplate({
  firstName,
  lastName,
  language,
  questions,
}: Readonly<EmailTemplateProps>) {
  const hydratedQuestions = questions.map((answer, index) => {
    const question = SPIRITUAL_GIFTS_QUESTIONS[index];
    return {
      ...question,
      answer,
    };
  });
  const scoredGifts = scoreGifts(questions, language);
  return (
    <>
      <h2>
        {language === "chinese" ? "你好" : "Hello"} {firstName} {lastName},
      </h2>
      <p>
        {language === "chinese"
          ? "感謝您完成屬靈恩賜評估。以下是您的結果："
          : "Thank you for completing the Spiritual Gifts Assessment. Below are your results:"}
      </p>
      <p>
        {language === "chinese"
          ? "如果您有任何疑問或需要進一步協助，請隨時與我們聯絡："
          : "If you have any questions or need further assistance, feel free to contact us at"}{" "}
        https://www.ccfciv.org/newcomers.html.
      </p>
      <h3>{language === "chinese" ? "評估詳情：" : "Assessment Details:"}</h3>
      {language === "chinese"
        ? "25 項精神恩賜依降序排列："
        : "Spiritual Gifts in descending order out of 25:"}
      <ol>
        {scoredGifts.map((gift) => {
          return (
            <li key={gift.gift}>
              {gift.gift}: {gift.score}
            </li>
          );
        })}
      </ol>
      <SpiritualGiftsQuestionResults
        language={language}
        hydratedQuestions={hydratedQuestions}
      />
    </>
  );
}
