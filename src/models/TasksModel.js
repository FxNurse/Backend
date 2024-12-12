const mongoose = require('mongoose')

const TaskSchema =new mongoose.Schema({
    taskTitle:{
        type: String,
        required: true
    },
    tags:{
        type: String,
        enum:['urgent', 'important']
    },
    desc:{
        type:String,
        required: true
    }
})
module.exports = mongoose.model('Task', TaskSchema)