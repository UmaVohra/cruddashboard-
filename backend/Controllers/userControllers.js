import { insertUser,dispUser,deleteUser,editUser,signup,signin } from "../services/usersServices.js";

export const insert=async(req,res)=>{
    try{
    const  {name,age,address,email}=req.body;
    const result=await insertUser(name,age,address,email);
    res.json({mssg:"insertion done",result
    });}

    catch(err){
        res.json({error:err.message});
    }
}

export const display=async(req,res)=>{
    try{
    const result=await dispUser();
    res.json({
        mssg:"displaying users",result
    });}
    catch(err){
        res.json({error:err.message});
    }
}
export const del=async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(req.params);
        const result=await deleteUser(id);
        res.json({
            mssg:"deletion done",result
        });


    }
    catch(err){
        res.json({error:err.message});
    }
}
export const edit=async(req,res)=>{
    try{

    
    const {id}=req.params;
    const {name,age,address,email}=req.body;
    const result= await editUser(id,name,age,address,email);
    res.json({
        message:"user editted",
        result

    })}
    catch(err){
        res.json({
            error:err.message
        });
    }

}

export const signUp=async(req,res)=>{
    try{
    const {email,password}=req.body;
    const result=await signup(email,password);
    res.json({
        message:"hashed",
        result
    });
    }
    catch(err){
        res.json({error:err.message})
    }
}

export const signIn=async(req,res)=>{
    try{
        const {email,password}=req.body;
        console.log("req",req.body)
        const result =await signin(email,password);
       // console.log("token from api",result.token)
        res.json({
          message:"user signed in",
          token: result.token,user:result.email
        });

    }
    catch(err){
        res.status(404).json({error:err.message})
    }
}