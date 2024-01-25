import {UserPrismaService} from "../../prisma"
import {User} from "../models/user";

export class UserService {
    static async getAllUsers(): Promise<User[] | null> {
        return await UserPrismaService.getAllUsers();
    }

    static async getUser(id: number): Promise<User | null> {
        return await UserPrismaService.getUser(id);
    }

    static async createUser(user: User): Promise<User> {
        return await UserPrismaService.createUser(user)
    }

    static async updateUser(id: number, user: Partial<User>): Promise<User> {
        return await UserPrismaService.updateUser(id, user)
    }

    static async deleteUser(id: number): Promise<void> {
        return await UserPrismaService.deleteUser(id)
    }

}