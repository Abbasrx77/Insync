"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getAllUsers = void 0;
const async_1 = require("../middleware/async");
const user_service_1 = require("../services/user_service");
exports.getAllUsers = (0, async_1.asyncWrapper)(async (req, res, next) => {
    return await user_service_1.UserService.getAllUsers();
});
exports.getUser = (0, async_1.asyncWrapper)(async (req, res, next) => {
    const { id } = req.body;
    return await user_service_1.UserService.getUser(id);
});
// export const createUser = asyncWrapper(async (req:Request,res:Response,next: NextFunction): Promise<User> => {
//     const user:User = req.body!.user;
// })
//# sourceMappingURL=user.js.map