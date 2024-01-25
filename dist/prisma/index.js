"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrismaService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserPrismaService {
    static async getAllUsers() {
        return prisma.user.findMany();
    }
    static async getUser(id) {
        return prisma.user.findUnique({
            where: { id }
        });
    }
    static async createUser(user) {
        return prisma.user.create({
            data: user
        });
    }
    static async updateUser(id, user) {
        return prisma.user.update({
            where: { id },
            data: user
        });
    }
    static async deleteUser(id) {
        await prisma.user.delete({
            where: { id }
        });
    }
}
exports.UserPrismaService = UserPrismaService;
async function main() {
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    prisma.$disconnect();
});
//# sourceMappingURL=index.js.map