const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const userRoutes = require('./Routes/user')

app.use(morgan('tiny'))
app.use(middleware)
app.use(express.json())



mongoose.connect('mongodb+srv://azeemhps:H1716056@cluster0.l0cycdy.mongodb.net/').then(()=>{
    console.log('MongoDb connected')
}).catch((err)=>{
    console.log(err)
})


app.get('/', (req,res)=>{
    res.send('Hello Node Js')
})

app.use('/user' , userRoutes)


app.listen(3000, ()=>{
    console.log('Hello Node JS')
})