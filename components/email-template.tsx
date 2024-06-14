import * as React from "react";

type EmailTemplateProps = {
  firstName: string;
  lastName: string;
  email: string;
  questions: number[];
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
