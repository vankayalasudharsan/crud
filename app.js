require('dotenv').config();
const express = require('express')
const  app = express()
const cors = require('cors')

// Middleware for parsing JSON requests
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello Sudharsan')
})

// Imported Routes From Routes Floder
const {crudRouter} = require('./routes/index')

app.use('/crud',crudRouter)

const port = process.env.PORT || 3700

//server Initiation
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})