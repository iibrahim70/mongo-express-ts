"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllers = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_service_1.UserServices.createUserIntoDB(user);
        res.status(200).json({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
            error: {
                code: 500,
                description: 'Internal server error!',
            },
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserServices.getAllUsersFromDB();
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
            error: {
                code: 500,
                description: 'Internal server error!',
            },
        });
    }
});
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.UserServices.getSingleUserFromDB(Number(userId));
        res.status(200).json({
            success: true,
            message: 'User fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'User not found!',
            error: {
                code: 404,
                description: 'User not found!',
            },
        });
    }
});
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield user_service_1.UserServices.updateUserFromDB(Number(userId), updatedUserData);
        res.status(200).json({
            success: true,
            message: 'User updated successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'User not found!',
            error: {
                code: 404,
                description: 'User not found!',
            },
        });
    }
});
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        yield user_service_1.UserServices.deleteUserFromDB(Number(userId));
        res.status(200).json({
            success: true,
            message: 'User deleted successfully!',
            data: null,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'User not found!',
            error: {
                code: 404,
                description: 'User not found!',
            },
        });
    }
});
exports.UserControllers = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};
