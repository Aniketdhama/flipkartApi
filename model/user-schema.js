import mongoose from "mongoose";

const userschema=new mongoose.Schema({
     firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
     },
     lastname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
     },
     username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
     },
     email:{
        type:String,
        required:true,
        trim:true,
         unique:true,
         lowercase:true
     },
     mobileno:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
})

const User=mongoose.model('user',userschema)

export default User