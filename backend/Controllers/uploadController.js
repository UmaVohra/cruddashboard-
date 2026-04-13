import { insertUser,editUser } from "../services/usersServices.js";
export const uploadImage=async(req,res)=>{
    try{
    const {name,age,address,email}=req.body;
    console.log(req.body);
    const baseurl=`${req.protocol}://${req.get("host")}`;

    const image=req.file?`${baseurl}/uploads/${req.file.filename}`:null;
    const result=await insertUser(name,age,address,email,image);
    console.log(result);
    res.json({
        message:"image and other data inserted!!",
        file:req.file,//req.file (uploaded file from frontend)
        result

    });}
    catch(err){
        res.json({
            error:err.message
        });
    }
}
export const editUpload=async(req,res)=>{
    try{
    const {name,age,address,email}=req.body;
    const {id}=req.params;
    const baseurl=`${req.protocol}://${req.get("host")}`;
    const image=req.file?`${baseurl}/uploads/${req.file.filename}`:null;
    const result=await editUser(id,name,age,address,email,image);
    res.json({
        message:"updated",
        file:req.file,
        result
        
    })}
    catch(err){
        res.json({error:err.message});
    }

}