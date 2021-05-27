import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const register = async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await  bcrypt.hash(req.body.password,salt)
        const newUser= new User({
            username:req.body.username,
            password:hashedPassword,
            email:req.body.email
        });
        const user = await newUser.save()
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }

} 
export const login = async (req, res)=>{
    try {
            const loginUser= await User.findOne({username:req.body.username});
            !loginUser && res.status(400).json("wrong username or password")

            const validPassword= await bcrypt.compare(req.body.password,loginUser.password)
            !validPassword && res.status(400).json("wrong username or password")
            const {password,...others}=loginUser._doc;
            res.status(200).json(others)


    }catch (error) {


    }
}
