const user = require('../models/registration')
const bcrypt= require('bcrypt')
const jwt =('jsonwebtoken')

const register = async(req, res)=>{
    const {firstName, lastName, email, password, phoneNumber} = req.body

    if (!firstName || !password) return res.status(400).send
    ('All Fields are Required')
    try{
        const userExists = await user.findOne({
            email:email
        })
        if (userExists) return res.status(400).send('User already exist')
            const hashedpassword = await bcrypt.hash(password, 10)
        const user = new user({
            firstName,
            lastName,
            email,
            password:hashedpassword,
            phoneNumber
        })
        user.save()
        res.status(201)
    }catch(err){
        return res.status(500).send({msg:err.msg})
    }
}

const login = async(req,res)=>{
    const{email, password}=req.body
    if (!email||!password){
        return res.status(400).send('email and password needed!')
    }
    try{
        const user= await user.findOne({email})
        if(!user){
            return res.status(400).send('invalid email')
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){return res.status(400).send('invalid password')

        }
        //create jwt
        const token = jwt.sign(
            {id:user._id, email:user.email},
            process.env.JWT_SECRET,{expiresIn :'1h'}
        )
        return res.ststus(200).json({mrssage:'login successful', token})
    }catch(err){
        return res.status(500).send({msg:err.msg})
    }
}







module.exports = {register, login} 