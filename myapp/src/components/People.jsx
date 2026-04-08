import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

function People({ data, getUsers, tokenVal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const[editId,seteditId]=useState(null);

  const [openForm, setOpenform] = useState();
  const [buttonText,setbuttonText]=useState("Create");

  const handleForm = () => {
    setOpenform(true);};

  useEffect(() => {  getUsers();}, []);

  //console.log(data);

   const  handleInput=async()=>{
   if(editId){
    
    const body={name:name,email:email,age:age,address:address};
    console.log(body);

    const res=await fetch(`http://localhost:3000/api/edit/${editId}`,{
      body:JSON.stringify(body),
      headers:{
        "Content-type":"Application/json",
        "authorization":`${tokenVal}`
      },
      method:"PUT"
    })
    const resp=await res.json();
    console.log(resp);
    getUsers();
    setAddress(""),setAge(0),setEmail(""),setName("");
    setOpenform(false);
    setbuttonText("Create");

    if(!res.ok){
      console.log(res.error);
    }}
    else{

    const body={name:name,email:email,age:age,address:address};
    console.log(body);
    const res=await fetch("http://localhost:3000/api/insert",{
      method:"POST",
      headers:{
          "Content-Type": "application/json",
        "authorization":`${tokenVal}`
      },
      body:JSON.stringify(body)

    });
    const resp=await res.json();
    console.log(resp);
    if(res.ok){toast.success("Details inserted !!")}
    else{toast.error(resp.error);}
    getUsers();
    setName("");
     setAge(0);
    setEmail("");
    setAddress("");
  setOpenform(false);
  }

  }
   

  const handleDelete = async (id) => {
    console.log(id);
    const res = await fetch(`http://localhost:3000/api/del/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `${tokenVal}`,
      },
    });
    const resp = await res.json();
    getUsers(); //to automatically refresh table
    console.log(resp);
  };

  const handleEdit = async (id) => {


      setOpenform(true);
      seteditId(id);
     const find=data.find(usr=>usr.id===id);
     console.log(find);

     setName(find.name);
     setAddress(find.address);
     setAge(find.age);
     setEmail(find.email);
   // console.log(id);
   
  };
  return (
    <div>
      {openForm && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="text-black bg-white rounded p-6 w-80">
            <h2 className="text-lg font-bold mb-4">Enter Name</h2>

            <input
              type="text"
              value={name}
              className="border w-full p-2 mb-4"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
            <h2 className="text-lg font-bold mb-4">Enter Age</h2>

            <input
              type="number"
              className="border w-full p-2 mb-4"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
            />
            <h2 className="text-lg font-bold mb-4">Enter Address</h2>

            <input
              value={address}
              className="border w-full p-2 mb-4"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
            />

            <h2 className="text-lg font-bold mb-4">Enter Email</h2>

            <input
              type="text"
              value={email}
              className="border w-full p-2 mb-4"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <button
              className="bg-green-500 rounded cursor-pointer text-white  p-2 "
              onClick={(id) => handleInput(id)}
            >
             {/* Submit*/}{buttonText}
            </button>
            <button
              className="bg-red-500 rounded cursor-pointer text-white ml-4 p-2"
              onClick={() => {setOpenform(false),setEmail(""),setAddress(""),setAge(""),setName(""),setbuttonText("Create") }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Navbar notOpen={false} />
      <div className="bg-gray-800 min-h-screen pt-20 sm:ml-48 text-white">
        <div className="flex justify-between items-center">
       <h1 className="text-2xl font-bold sm:ml-20 mb-6 "> Below are the users stored</h1>
        <button className="sm:ml-50 border-0 w-36 rounded-2xl py-2 mr-14  font-semibold cursor-pointer bg-gray-600 "
         onClick={handleForm} >  Create Form </button></div>

        {/* <table className=" mt-40 m-96 w-full max-w-6xl sm:ml-40  border-gray-600 rounded-lg overflow-hidden">
          <thead className="bg-gray-600 text-gray-300 ">
            <tr>
              <th>name</th>
              <th>age</th>
              <th>address</th>
              <th>email</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="p-3 text-center">
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleDelete(user.id)}
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button onClick={() => handleEdit(user.id)}>edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <div className="mt-10 flex justify-center">
          <table className="w-full max-w-5xl bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg">
            <thead className="bg-gray-700 text-gray-300 uppercase text-sm">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Age</th>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-center" colSpan={2}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-700 hover:bg-gray-700 transition"
                >
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.age}</td>
                  <td className="p-4">{user.address}</td>
                  <td className="p-4">{user.email}</td>

                  <td className="p-4 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>

                  <td className="p-4 text-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg text-sm"
                      onClick={() => {handleEdit(user.id),setbuttonText("Edit form")}}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default People;
