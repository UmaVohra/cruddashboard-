import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Signin from './components/Signin'
import People from './components/People'
import { Routes,Route } from 'react-router-dom'
function App() {
  const [data, setData] = useState([]);                  

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
    
  };
  const token = localStorage.getItem("token");
  console.log(token);


  return (
  <>{/*<Navbar/>
  <Dashboard/>*/}
  <Routes>
    <Route path="/" element={<Signin/>}/>
   <Route path="/signup" element={<Signup/>} />
   <Route path="/dashboard" element={<Dashboard setData={setData}/>}/>
   <Route path="/people" element ={<People tokenVal={token} data={data} getUsers={handledisplay}/>}/>

  </Routes>
 
  </>
  )
}

export default App

















//pass a function from app.js to dashboard> use that functin to store data>pass that data to people component