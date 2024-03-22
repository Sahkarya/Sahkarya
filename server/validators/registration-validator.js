const { z } = require("zod");

const registrationSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should be at least 3 letter long" }),

  identity: z.string(),
  phone: z.string().min(10, { message: "Number must be atleat 10 digits" }),

  email: z
    .string({ required: "Email is required" })
    .trim()
    .email({ message: "Invalid email" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max({ message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be atleast 7 letter long" })
    .max(1024, { message: "Password cannot be longer than 1025 letter" }),
});

module.exports = registrationSchema;
