"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const fullNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
const addressValidationSchema = zod_1.z.object({
    street: zod_1.z.string(),
    city: zod_1.z.string(),
    country: zod_1.z.string(),
});
const odersValidationSchema = zod_1.z.object({
    productName: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
const userValidationSchema = zod_1.z.object({
    userId: zod_1.z.number().int().positive(),
    username: zod_1.z.string().min(3).max(15),
    password: zod_1.z.string().min(8).max(16),
    fullName: fullNameValidationSchema,
    age: zod_1.z.number().int().positive(),
    email: zod_1.z.string().email(),
    isActive: zod_1.z.boolean(),
    hobbies: zod_1.z.array(zod_1.z.string()).min(1),
    address: addressValidationSchema,
    orders: zod_1.z.array(odersValidationSchema).optional(),
});
exports.default = userValidationSchema;
