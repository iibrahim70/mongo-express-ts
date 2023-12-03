import { Schema, model } from 'mongoose';
import { IAddress, IFullName, IUser } from './user.interface';

const fullNameSchema = new Schema<IFullName>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const addressSchema = new Schema<IAddress>(
  {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: fullNameSchema,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  hobbies: [
    {
      type: String,
      required: true,
    },
  ],
  address: {
    type: addressSchema,
    required: true,
  },
});

export const User = model<IUser>('User', userSchema);
