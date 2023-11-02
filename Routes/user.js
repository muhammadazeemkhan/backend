const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Get Called')
})


router.post('/', (req,res)=>{
    res.send('post Called')
})




router.put('/', (req,res)=>{
    res.send('put Called')
})



router.delete('/', (req,res)=>{
    res.send('Delete Called')
})


