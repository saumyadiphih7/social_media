import mongoose from "mongoose"


const userSchema= new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        minlength:15
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:15,
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\S+\$/.test(v);
             },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
  
},{
    timestamps:true,
    
})

const User=mongoose.model("User",userSchema)

export default User;