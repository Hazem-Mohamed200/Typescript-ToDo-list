import { createUserController, getUsersController, getUserWithIDController, deleteUserController } from '../controllers/userController'

const Router = require('express').Router
const userRoutes = Router()


userRoutes.get('/', getUsersController)
userRoutes.get('/:id', getUserWithIDController)

userRoutes.post('/', createUserController)

userRoutes.delete('/:id', deleteUserController)

export default userRoutes