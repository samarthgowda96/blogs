import User from '../models/user.js';
import bcrypt from 'bcrypt';
import Post from '../models/post.js'

export const updateUser= async (req, res)=>{
    if(req.body.userId===req.params.id){
        if(req.body.password){
            const salt= await bcrypt.genSalt(10);
            const hashedPassword= await bcrypt.hash(req.body.password,salt)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(updatedUser)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    }
    else{
        res.status(401).json("you can update only your account")

    }

}
export const deleteUser= async (req, res)=>{
    if(req.body.userId===req.params.id){
    
       try{
         
           const user= await User.findById(req.params.id)


       
        try {
            await Post.deleteMany({username:user.username})
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("user has been deleted")
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    }catch(error){
        res.status(404).json('user not found')
    }
    }
    else{
        res.status(401).json("you can delete only your account")

    }

}

export const getUser =async(req, res)=>{
    try {
        const user= await User.findById(req.params.id)
        const {password,...others}=user._doc
        res.status(200).json(others)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}