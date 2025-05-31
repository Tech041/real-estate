import * as z from "zod";
export const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email format"),
  password: z
    .string()
    .min(6, { message: "Password should be 6 characters min" }),
  phone: z.string().min(5, { message: "It seems this number is invalid" }),
});
