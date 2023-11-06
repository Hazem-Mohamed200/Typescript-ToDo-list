import express from "express"
import toDoRoutes  from "./routes/toDoRoutes"
import userRoutes from "./routes/userRoutes"


const port = 3000
const app = express()   
app.use(express.json())


app.use('/todo', toDoRoutes);
app.use('/users', userRoutes);


app.listen(port, ()=>{
    console.log(`Alive on http://localhost:${port}/`)
})