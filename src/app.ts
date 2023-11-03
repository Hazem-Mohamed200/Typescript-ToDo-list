import express from "express"


const port = 3000
const app = express()
app.use(express.json())


app.get('/', (request, response)=>{
    
    response.send('<strong> Express Test </strong>')
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})