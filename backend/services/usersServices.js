import { pool } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_SECRET="supersecret@123#"

export const signup=async(email,password)=>{
    
    const hashpassword=await bcrypt.hash(password,10);
    const res=await pool.query("insert into users(email,password)values ($1,$2) returning *",[email,hashpassword]);
    return res.rows[0];

    }
export const signin=async(email,password)=>{
    
    const user=await pool.query("select * from users where email=$1 ",[email]);
    if(user.rows.length===0) throw new Error ("Email doesnot exist");
    const userin=user.rows[0];
    const valid=await bcrypt.compare(password,userin.password);
    if(!valid) throw new Error("password not matching");
    const token=jwt.sign({email:userin.email},JWT_SECRET,{expiresIn:"1h"});
    console.log("token from middleware", token)

    return(
        {email:userin.email,token}
        
        )
}
  



export const insertUser=async(name,age,address,email)=>{
    const insert=await pool.query("insert into users(name,age,address,email)values ($1,$2,$3,$4) returning *",[name,age,address,email]);
    return insert.rows[0];

}

export const dispUser=async()=>{
    const disp=await pool.query("select * from users" );
    return disp.rows;
}

export const deleteUser=async(id)=>{
    const del=await pool.query("delete from users where id=$1",[id]);

}
export const editUser=async(id,name,age,address,email)=>{
    const edit=await pool.query("update users set name=$1,age=$2,address=$3,email=$4 where id=$5 returning *",
        [name,age,address,email,id]);
        return edit.rows[0];
    
    }
