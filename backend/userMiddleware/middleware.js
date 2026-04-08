import jwt from "jsonwebtoken"
const JWT_SECRET="supersecret@123#"

export const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    
   
    const token=authHeader;
    console.log("token",token)
    try{
         if(!token){
            console.log("no token here")
        return res.status(404).json({error:"access denied"});
         }
         else{
        console.log("token was present")
        const verified=jwt.verify(token,JWT_SECRET);
        req.user=verified;
        next();

         }
    }
    catch(error){
        console.log(error)
        res.status(403).json({error:"invalid token"});
    }
}