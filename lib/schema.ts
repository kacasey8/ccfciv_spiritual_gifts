import { z } from "zod";

const REQUIRED = "Required";

export const formSchema = z.object({
  firstName: z.string().min(1, {
    message: REQUIRED,
  }),
  lastName: z.string().min(1, {
    message: REQUIRED,
  }),
  email: z
    .string()
    .min(1, { message: REQUIRED })
    .email("This is not a valid email."),
  questions: z.coerce
    .number()
    .min(1, { message: REQUIRED })
    .max(5, { message: REQUIRED })
    .array(),
});
