import User from "../models/User.js";

export const postUser=async(req,res)=>{
    const us=new User(req.body);
    us.save().then(()=>{
        res.send(us);
    })
}

export const getUser=async(req,res)=>{
    try{
        const{id}=req.params;
        console.log("hiiii",id);
        const us=await User.findById(id);
        res.status(200).json(us);
        
    }catch(error){
        res.status(404).json({message:error.message})
    }
}