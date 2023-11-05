import express from "express"
import Router  from "./routes/toDoRoutes"


const port = 3000
const app = express()   
app.use(express.json())


app.use('/todo', Router)

app.listen(port, ()=>{
    console.log(`Alive on http://localhost:${port}/`)
})