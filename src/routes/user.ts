import express from 'express'
import {createUser, deleteUser, getAllUsers, getUser, updateUser} from "../controllers/user";
const router = express.Router()

router.route('/api/v1/users').get(getAllUsers).post(createUser)
router.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser)

export default router