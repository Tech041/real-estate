import * as z from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email format"),
  password: z
    .string()
    .min(6, { message: "Password should be 6 characters min" }),
});
