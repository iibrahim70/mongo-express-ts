import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const result = await UserServices.createUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error!',
      error: {
        code: 500,
        description: 'Internal server error!',
      },
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error!',
      error: {
        code: 500,
        description: 'Internal server error!',
      },
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserServices.getSingleUserFromDB(Number(userId));
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedUserData = {
      userId: req.body.userId,
      username: req.body.username,
      password: req.body.password,
      fullName: {
        firstName: req.body.fullName.firstName,
        lastName: req.body.fullName.lastName,
      },
      age: req.body.age,
      email: req.body.email,
      isActive: req.body.isActive,
      hobbies: req.body.hobbies,
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
        country: req.body.address.country,
      },
    };

    const result = await UserServices.updateUserFromDB(
      Number(userId),
      updatedUserData,
    );
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await UserServices.deleteUserFromDB(Number(userId));

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
