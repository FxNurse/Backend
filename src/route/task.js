const express = require("express")
const { getAllUsers } = require ("../Controller/user")
const { createTask, getSingleTask } = require("../Controller/task")
const router = express.Router()


router.post('/create', createTask)
router.get("./singletask/:id",getSingleTask)

module.exports =router