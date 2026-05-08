import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }).optional().nullable(),
  role: z.enum(["USER", "ADMIN"]).default("USER"),
  createdAt: z.date().optional()
});

export const userListSchema = z.array(userSchema);
