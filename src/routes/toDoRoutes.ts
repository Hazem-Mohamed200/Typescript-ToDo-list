import { todo } from 'node:test'
import { createToDoController, getToDosController, getUserToDosController } from '../controllers/toDoController'

const Router = require('express').Router
const toDoRoutes = Router()


toDoRoutes.get('/', getToDosController)
toDoRoutes.get('/:id', getUserToDosController)

toDoRoutes.post('/', createToDoController)


export default toDoRoutes