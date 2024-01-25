import {Request, Response, NextFunction} from 'express';
import { asyncWrapper } from "../middleware/async";
import {User} from "../models/user";
import {UserService} from "../services/user_service";
import {hash_password} from "../utils/auth_utils";


export const getAllUsers = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const users: User[] | null = await UserService.getAllUsers()
    return res.status(200).json(users)
})

export const getUser = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const id = parseInt(req.params.id)
    const user: User | null = await UserService.getUser(id)
    return res.status(200).json(user)
})

export const createUser = asyncWrapper(async (req:Request,res:Response,next: NextFunction): Promise<Response> => {
    const user = req.body
    const password = user.password
    const passwordDetails = (await hash_password(password))
    user.salt = passwordDetails.salt
    user.hash = passwordDetails.hash
    delete user.password
    const createdUser = await UserService.createUser(user)
    return res.status(201).json(user)
})

export const updateUser = asyncWrapper(async(req: Request, res: Response, next: NextFunction): Promise<Response> =>{
    const id = parseInt(req.params.id)
    const data = req.body
    const updatedUser = await UserService.updateUser(id,data)
    return res.status(200).json(updatedUser)
})

export const deleteUser = asyncWrapper(async(req: Request, res: Response, next: NextFunction): Promise<Response> =>{
    const id = parseInt(req.params.id)
    const deletedUser = await UserService.deleteUser(id)
    return res.status(200).json({
        "msg":"User deleted successfully"
    })
})