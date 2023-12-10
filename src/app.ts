import express from "express"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
dotenv.config({ path: ".env" });

import toDoRoutes  from "./routes/toDoRoutes"
import userRoutes from "./routes/userRoutes"


const app = express()

const port = process.env.PORT
const dataBaseConnectionSTR = process.env.DATABASE_CONNECTION_STRING


app.use(express.json())


app.use('/todo', toDoRoutes)
app.use('/users', userRoutes)


mongoose.connect(dataBaseConnectionSTR!).then(()=>{
    console.log('Connected to database')
    app.listen(port, ()=>{console.log(`Alive on http://localhost:${port}/`)})
}).catch((err)=>{console.log(`Error: ${err}`)})