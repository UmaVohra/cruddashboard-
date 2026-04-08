import React from "react";
import { HomeIcon } from "../icons/HomeIcon";
import Analyticsicon from "../icons/Analyticsicon";
import People from "../icons/People";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar({display ,notOpen}) {
 //debugger;
 const navigate=useNavigate();
  const [isOpen,setIsopen]=useState(notOpen);
  //const [Data,setData]=useState([]);

  const handleLogout=()=>{
      localStorage.removeItem("token");
      toast.info("Logged out !!",{autoClose:2000});
      setTimeout(()=>{
        navigate("/");
      },1500);
      
   // console.log(tokenval);
  }
  const disp=()=>{
    navigate("/people");
  }

  

  return (
    <div className="flex flex-row">
      <nav className="text-xl flex border-b  items-center p-6 fixed text-blue-500 z-50  bg-[#000] w-full mb-5">
        <ul className="flex font-bold w-full justify-between">
          <li>Welcome</li>
          <li>
  <button className="cursor-pointer  z-10" onClick={() => setIsopen(!isOpen)} >
    {isOpen ? "✕" : "☰"}
  </button>
</li>
         {/* {isOpen && (<li><button className="cursor-pointer sm:hidden z-10" onClick={()=>setIsopen(true)}> ✕</button></li>)}
           {!isOpen && (<li><button className="cursor-pointer sm:hidden z-10" onClick={()=>setIsopen(false)}>☰ </button></li>)}*/}
        </ul>
      </nav>


      {/*sidebar*/}
{isOpen ? ( <div className="bg-gray-800 overflow-y-hidden fixed top-0 left-0 w-screen min-h-screen flex justify-center items-center flex-col gap-10  duration-300 ease-in z-40">
        <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <HomeIcon className="w-5 h-5 fill-white" />
          Home
        </div>
        <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <Analyticsicon />
          Analytics
        </div>
        <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <People />
          people
        </div>
         <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
         <People />
        Logout
        </div>
        </div>)
        :
        (<div className="hidden sm:block bg-black md:w-64 min-h-screen fixed mt-16 p-4 text-white ">
          <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <HomeIcon className="w-5 h-5 fill-white" />
          Home
        </div>
        <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <Analyticsicon />
          Analytics
        </div>
        <div /*onClick={display}*/ onClick={disp} className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <People />
          people
        </div>
         <div  onClick={handleLogout}  className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <People />
          Logout
        </div>

          </div>)}





      {/*<div className="hidden sm:block bg-black md:w-64 min-h-screen fixed mt-16 p-4 text-white">
      <div className="">
        <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <HomeIcon className="w-5 h-5 fill-white" />
          Home
        </div>
        <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <Analyticsicon />
          Analytics
        </div>
        <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <People />
          people
        </div>
         <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer">
          <People />
          Logout
        </div>
        </div>
    {/*</div>*/}  
    </div>
  );
}

export default Navbar;
