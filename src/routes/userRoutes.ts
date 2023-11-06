import { getUsersController } from '../controllers/userController'

const Router = require('express').Router
const userRoutes = Router()


userRoutes.get('/', getUsersController)


export default userRoutes