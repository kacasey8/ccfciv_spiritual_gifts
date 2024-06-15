import { FormLabel } from "@/components/ui/form";
import { SPIRITUAL_GIFTS_QUESTIONS } from "@/lib/data";
import { formSchema } from "@/lib/schema";
import { scoreGifts } from "@/lib/scoreGifts";

type EmailTemplateProps = {
  firstName: string;
  lastName: string;
  email: string;
  questions: number[];
};

export function EmailTemplate({
  firstName,
  lastName,
  email,
  questions,
}: Readonly<EmailTemplateProps>) {
  const hydratedQuestions = questions.map((answer, index) => {
    const question = SPIRITUAL_GIFTS_QUESTIONS[index];
    return {
      ...question,
      answer,
    };
  });
  const scoredGifts = scoreGifts(questions);
  return (
    <>
      <h2>
        Hello {firstName} {lastName},
      </h2>
      <p>
        Thank you for completing the Spiritual Gifts Assessment. Below are your
        results:
      </p>
      <p>
        If you have any questions or need further assistance, feel free to
        contact us at https://www.ccfciv.org/newcomers.html.
      </p>
      <h3>Assessment Details:</h3>
      Spiritual Gifts in descending order out of 25:
      <ol>
        {scoredGifts.map((gift) => {
          return (
            <li key={gift.gift}>
              {gift.gift}: {gift.score}
            </li>
          );
        })}
      </ol>
      <h3>Questions:</h3>
      <ol>
        {hydratedQuestions.map((question, index) => (
          <li key={index}>
            <b>{question.question}</b>
            <p>Your answer: {question.answer}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
