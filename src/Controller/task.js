const task = require ('../models/TasksModel')

const createTask = async(req, res)=>{
    try{
      
        const task = await task.create(req.body)
        res.status(201).json({task})
    }catch(error){
        console.log('error creatging task:', error)
        res.status(500).json ({mssg:error})
    }
}

    const getSingleTask = async(req,res)=>{
try {
    const id = req.params
    const task = await task.findOne({_id:id} , req.body,{new: true})
    if(!task){
      return  res.status(404).json({msg: `no task with nid: ${id}`})
    }
    res.status(200).json({task})
} catch(err){
    res.status(500).json({msg:err})
}
}
const updateTask = async(req, res)=>{
    try {
        const id = req.params
        const task = await task.findOne({_id:id} , req.body,{new: true})
        if(!task){
          return  res.status(404).json({msg: `no task with nid: ${id}`})
        }
        res.status(200).json({task})
    } catch(err){
        res.status(500).json({msg:err})
    }
}

const deleteTask = async(req, res)=>{
    const id = req.params.id
    const task = await task.findOneAndDelete
}



module.exports ={createTask, getSingleTask, updateTask}