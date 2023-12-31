import express from 'express';
import { UserControllers } from './user.controller';
const router = express.Router();

router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getUserById);
router.put('/:userId', UserControllers.updateUserById);
router.delete('/:userId', UserControllers.deleteUserById);

export const UserRouter = router;
