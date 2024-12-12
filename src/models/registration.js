
const mongoose= require( 'mongoose')

const RegistrationSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
   lastName:{
        type: String,
        required:true
    },
    phoneNumber:{
    type:Number,
    reuired: true,
    },
  password:{
    type:String,
    reuired: true
    }
})

module.exports = mongoose.model('Registration',RegistrationSchema)