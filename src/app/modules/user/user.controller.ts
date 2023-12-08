import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = UserServices.createUserIntoDb(user);
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

export const UserControllers = {
  createUser,
};
