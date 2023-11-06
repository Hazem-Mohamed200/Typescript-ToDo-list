import { createUserController, getUsersController, getUserWithIDController } from '../controllers/userController'

const Router = require('express').Router
const userRoutes = Router()


userRoutes.get('/', getUsersController)
userRoutes.get('/:id', getUserWithIDController)

userRoutes.post('/', createUserController)

export default userRoutes