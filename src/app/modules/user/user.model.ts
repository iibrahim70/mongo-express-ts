import { Schema, model } from 'mongoose';
import {
  IAddress,
  IFullName,
  IOrders,
  IUser,
  UserModel,
} from './user.interface';

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

const odersSchema = new Schema<IOrders>(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
  },
);

const userSchema = new Schema<IUser, UserModel>({
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
  orders: [
    {
      type: odersSchema,
    },
  ],
});

// creating a custom static method
userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

export const User = model<IUser, UserModel>('User', userSchema);
