import { getToDosController } from '../controllers/toDoController'

const Router = require('express').Router
const toDoRoutes = Router()


toDoRoutes.get('/', getToDosController)


export default toDoRoutes