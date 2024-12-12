
const express = require('express');
const app=express()
const userRoute =require('./src/route/userroute')
const TaskRouter = require("./src/route/task")



const mongoose= require('mongoose');
const { createTask } = require('./src/Controller/task');

const connectDB= async()=>{
    const mongoUri='mongodb+srv://fxnurse89:Fxnursee@cluster0.jjvrp.mongodb.net/'


    if (!mongoUri){
        throw new Error ('DB_URL is not drfined in the environment variables');
    }     
    
    try{
        await mongoose.connect(mongoUri);
        console.log('mongoDB connected successfully')
    } catch(error){
        console.log('mongoDB connection failed:', error);
        process.exit(1);  //exit process with failure
    }
}
connectDB()  



//define a basic route
app.get('/',(req,res)=>{
    res.send(' welcome to express.js')
})
app.use("/api", userRoute)
app.use("/task", TaskRouter)



//starting the server
const PORT = 5000
app.listen(PORT, () =>{
    console.log(`sever is running on http://localhost:${PORT}`)
})