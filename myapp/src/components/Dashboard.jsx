import React from "react";
import Analyticsicon from "../icons/Analyticsicon";
import Searchicon from "../icons/Searchicon";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Dashboard({setData}) {

//const [data,setData]=useState([]);
{/*
  const handledisplay = async () => {
    console.log("display");
    const res = await fetch("http://localhost:3000/api/display", {
      method: "GET",
      headers: {
        authorization: `${token}`,
      },
    });
    const resp = await res.json();
    console.log(resp.result,"Res");
    
    setData(resp.result);
    
  };*/}

  //const token = localStorage.getItem("token");
  //console.log(token);
  //console.log("data",data)
  //debugger;
  return (
    <div>
      <Navbar /*display={handledisplay} *//>
      <div className=" sm:ml-64 mt-16 min-h-screen sm:p-6 overflow-y-auto bg-gray-900 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-3xl font-bold mt-3">Dashboard</h1>

          <div className="  z-0 relative  md:max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 mt-6 mr-0 mr:5 ml-3 pl-9  md:mr-13 w-full rounded-lg  bg-gray-800 text-white border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <h3 className="font-bold text-2xl mb-4 w-full ">Overview</h3>

        <div className="grid grid-cols-1 lg:grid-cols-4 m-2  gap-4 ">
          <div className="bg-gray-800 rounded-xl h-48 p-5 ">
            <Analyticsicon />{" "}
            <div className="font-semibold">Explore your data </div>
            <p className="text-gray-500">
              Uncover performance and visitor insights with our data wizardry
            </p>
            <br />
            <button className="bg-white text-black pl-2 pr-2 mt-0 cursor-pointer rounded">
              Get Insights{" "}
            </button>
          </div>
          <div className="bg-gray-800 rounded-xl h-48">1</div>
          <div className="bg-gray-800  rounded-xl h-48">1</div>
          <div className="bg-gray-800 rounded-xl h-48">1</div>
          <div className="bg-gray-800 rounded-xl lg:row-span-2 lg:col-span-2 h-72">
            1
          </div>
          <div className="bg-gray-800 rounded-xl lg:row-span-2 lg:col-span-2 h-72">
            1
          </div>
        </div>
        <h1>stored</h1>
      
        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-gray-300">
      <tr>
        <th className="p-3 text-left">Name</th>
        <th className="p-3 text-left">Age</th>
        <th className="p-3 text-left">Address</th>
        <th className="p-3 text-left">Email</th>
      </tr>
    </thead>
    
          <tbody>
        {/*data?.map((user)=>
        (<tr key={user.id} className="border-t border-gray-700 hover:bg-gray-800 transition">
          <td className="text-white">{user.name}</td>
          <td>{user.age}</td>
          <td>{user.address}</td>
          <td>{user.email}</td></tr>
    ))*/}</tbody>
       </table>
      </div>
    </div>
  );
}
