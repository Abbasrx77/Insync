"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../../prisma");
class UserService {
    static async getAllUsers() {
        return await prisma_1.UserPrismaService.getAllUsers();
    }
    static async getUser(id) {
        return await prisma_1.UserPrismaService.getUser(id);
    }
    static async createUser(user) {
        return await prisma_1.UserPrismaService.createUser(user);
    }
    static async updateUser(id, user) {
        return await prisma_1.UserPrismaService.updateUser(id, user);
    }
    static async deleteUser(id) {
        return await prisma_1.UserPrismaService.deleteUser(id);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user_service.js.map