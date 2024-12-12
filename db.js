const mongoose= require('mongoose')

const connectDB= async()=>{
    const mongoUri='mongodb+srv://fxnurse89:Fxnurse89@@cluster0.jjvrp.mongodb.net/'


    if (!mongoUri){
        throw new Error ('DB_URL is not drfined in the environment variables');
    }
    
    try{
        await mongoose.connect(mongoUri);
        console.error('mongoDB connected successfully')
    } catch(error){
        console.log('mongoDB connection failed:', error);
        process.exit(1);//exit process with failure
    }
}
connectDB()

module.exports=connectDBn