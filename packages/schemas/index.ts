import { z } from 'zod';

export const UserSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export const ContactMessageSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});
