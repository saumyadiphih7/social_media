import Post from "../schema/post.js";

export const createPost = async(caption, image, user)=>{
    try{
        const newPost= await Post.create({
            caption,
            image,
            user
        });
        return newPost;
    }catch(err){
        console.log(err)
    }
}


export const findAllPosts = async()=>{
    try{
        const posts= await Post.find();
        return posts;
    }catch(err){
        console.log(err)
    }
}

export const findPostById = async(id)=>{
    try{
        const post= await Post.findById(id);
        return post;
    }catch(err){
        console.log(err)
    }
}


export const updatePost=async(id,caption,image,user)=>{
    try{
       const updatePost=await Post.findByIdAndUpdate(id,{
        caption,
        image,
        user
       },{new:true})
       return updatePost;
    }catch(err){
        console.log(err)
    }
}

export const deletePost=async(id)=>{
    try{
        const deletedPost=await Post.findByIdAndDelete(id);
        return deletedPost;
    }catch(err){
        console.log(err)
    }
}

