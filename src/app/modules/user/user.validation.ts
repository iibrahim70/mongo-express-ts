import { z } from 'zod';

const fullNameValidationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const addressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const odersValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userValidationSchema = z.object({
  userId: z.number().int().positive(),
  username: z.string().min(3).max(15),
  password: z.string().min(8).max(16),
  fullName: fullNameValidationSchema,
  age: z.number().int().positive(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()).min(1),
  address: addressValidationSchema,
  orders: z.array(odersValidationSchema).optional(),
});

export default userValidationSchema;
