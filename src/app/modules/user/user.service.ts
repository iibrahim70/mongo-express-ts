import { IUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (user: IUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find().select({
    username: 1,
    userId: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

const getSingleUserFromDB = async (userId: number) => {
  const userData = await User.isUserExists(userId);
  if (!userData) {
    throw new Error('User not found');
  }
  return userData;
};

const updateUserFromDB = async (userId: number, user: Partial<IUser>) => {
  const isUserExists = await User.isUserExists(userId);
  if (!isUserExists) {
    throw new Error('User not found!');
  }

  const result = await User.findOneAndUpdate({ userId }, user, { new: true });
  return result;
};

const deleteUserFromDB = async (userId: number) => {
  const isUserExists = await User.isUserExists(userId);
  if (!isUserExists) {
    throw new Error('User not found!');
  }

  const result = await User.findOneAndDelete({ userId }, { new: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
