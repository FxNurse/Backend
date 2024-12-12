const express = require("express")
const { register } = require ("../Controller/user")
const router = express.Router()

// const users =[
//     {id: 1, name: fortune},
//     {id: 2, name: fortun},
//     {id: 3, name: fortu},

// ]

router.post('/user',register)
module.exports =router