import {PrismaClient, User} from "@prisma/client";
const prisma = new PrismaClient()

export class UserPrismaService {
    static async getAllUsers(): Promise<User[] | null> {
        return prisma.user.findMany();
    }

    static async getUser(id: number): Promise<User | null> {
        return prisma.user.findUnique({
            where: {id}
        });
    }

    static async createUser(user: User): Promise<User> {
        return prisma.user.create({
            data: user
        });
    }

    static async updateUser(id: number, user: Partial<User>): Promise<User> {
        return prisma.user.update({
            where: {id},
            data: user
        });
    }

    static async deleteUser(id: number): Promise<void> {
        await prisma.user.delete({
            where: { id }
        })
    }
}
async function main() {

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        prisma.$disconnect()
    })