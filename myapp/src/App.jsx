import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Signin from './components/Signin'
import People from './components/People'
import { Routes,Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDebounce } from './components/useDebounce'

function App() {
  const [data, setData] = useState([]); 
  const [page,setPage]=useState(1);
  const [limit,setLimit]=useState(5);
  const [search,setSearch]=useState("");
  const[Age,Setfilterage]=useState(0);  
  
  const debouncedAge=useDebounce(Age,500);
  const debouncedSearch=useDebounce(search,500);

 const handledisplay = async () => {
    console.log("display");
    const res = await fetch(`http://localhost:3000/api/display/?page=${page}&limit=${limit}&search=${debouncedSearch}&age=${debouncedAge}`, {
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
  //console.log(token);
useEffect(() => {  handledisplay();}, [page,limit,debouncedAge,debouncedSearch]);


  return (
  <>{/*<Navbar/>
  <Dashboard/>*/}
  <Routes>
    <Route path="/" element={<Signin/>}/>
   <Route path="/signup" element={<Signup/>} />
   <Route path="/dashboard" element={<Dashboard setData={setData}/>}/>
   <Route path="/people" element ={<People tokenVal={token} data={data} getUsers={handledisplay} pageNo={page} setPage={setPage} limit={limit} setLimit={setLimit}
    Age={Age} Setfilterage={Setfilterage} search={search} setSearch={setSearch}/>}/>

  </Routes>
 
  </>
  )
}

export default App

















//pass a function from app.js to dashboard> use that functin to store data>pass that data to people component