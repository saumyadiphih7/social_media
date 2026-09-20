import User from "../schema/user.js";

export const findUserByEmail =async(email)=>{
    try{
       const user= await User.findOne({email:email})
       return user;
    }catch(err){
        console.log(err)
    }
}

export const findAllUsers = async()=>{
    try{
       const users= await User.find();
       return users;
    }catch(err){
        console.log(err)
    }
}

export const findUserById =async(id)=>{
    try{

        const user=await User.findById(id);
        return user;
    }catch(err){
        console.log(err)
    }
}

export const createUser = async(name,email,password   
)=>{
    try{
      const newUser=await User.create({
        username:name,
        email:email,
        password:password
      })
      return newUser;
    }catch(err){
        console.log(err)
    }
}

export const updateUser = async(id, name,email,password)=>{
    try{
        const updatedUser= await User.findByIdAndUpdate(id,{
            username:name,
            email:email,
            password:password
        },{new:true})
        return updatedUser;
    }catch(err){
        console.log(err)
    }
}

export const deleteUser =async(id)=>{
    try{
       const deletedUser=await User.findByIdAndDelete(id);
       return deletedUser;
    }catch(err){
        console.log(err)
    }
}