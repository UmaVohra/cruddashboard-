import React from "react";
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [userEmail, setUseremail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
 
  const navigate=useNavigate();

  const handleSignup = async(e) => {
    e.preventDefault();
    let newErrors = {};
    if (!userEmail.includes("@") || !userEmail.includes(".")) {
      newErrors.email = "email should have @/.";
    }
    if (Password.length < 4) {
      newErrors.Password = "password should have more than 4 characters";
    }
    if (!userEmail) {
      newErrors.email = "It cant be empty";
    }
    if (!Password) {
      newErrors.Password = "cant be empty";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const body={email:userEmail,password:Password};
      const res=await fetch("http://localhost:3000/api/signup",{
        method:"POST",
        headers:{
          "Content-type":"Application/json"
          
        },
        body:JSON.stringify(body)
        

      });
      const resp=await res.json();
      console.log(resp);
    if(res.ok){  toast.success("Signup Successful");}
    else{
      toast.error(resp.error);
        console.log("error",resp.error);
      }
      setTimeout(()=>{
     console.log("welcome");
      navigate("/");
      },1000);

      
    }
  };
  return (
    <div className=" flex items-center justify-center h-screen bg-gray-900">
      <div className=" w-90 h-90 rounded-2xl px-5 py-5 shadow-gray-400 bg-gray-500">
 


      <h1 className="text-3xl block font-bold text-center text-white">SIGNUP</h1><br/>
      <form className="mt-4" onSubmit={handleSignup}>
        <label className="block text-base ">Enter Your mail</label>
        <input className="outline w-full rounded mt-2"
          type="text"
          value={userEmail}
          onChange={(e) => {
            setUseremail(e.target.value);
          }}
        />
        <br />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <label className="block text-base mt-3">Enter Password</label>
        <input className="outline w-full rounded mt-3"
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {errors.Password && <p style={{ color: "red" }}>{errors.Password}</p>}
        <button className="bg-blue-700 mt-4 text-xl text-white hover:bg-transparent hover:text-blue-50 font:semi-bold rounded w-full cursor-pointer  ">Sign up! </button>
        <br />

        <p className="text-center font-bold mt-3 text-blue-600">Already have account <Link to="/">signin</Link>  </p>
      </form>
      
      </div>
     
    </div>
  );
}

export default Signup;
