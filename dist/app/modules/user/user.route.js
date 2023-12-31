"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/', user_controller_1.UserControllers.createUser);
router.get('/', user_controller_1.UserControllers.getAllUsers);
router.get('/:userId', user_controller_1.UserControllers.getUserById);
router.put('/:userId', user_controller_1.UserControllers.updateUserById);
router.delete('/:userId', user_controller_1.UserControllers.deleteUserById);
exports.UserRouter = router;
