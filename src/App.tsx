import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Infos} from "./Utils"
import Tablecompo from './components/Tablecompo';


// type Userinfos = {
//   id:number
//   name:string
//   email:string
// }


function App() {


 // const [userinfos, setuserinfos] = useState(Infos)

 // const [userinfos, setuserinfos] = useState<Userinfos[]>([])
  //console.log(typeof userinfos)
//   useEffect(()=>{
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>res.json())
// .then((data)=>setuserinfos(data))
//   },[])
  return (
    <div className=''>

    <h1 className='text-2xl text-center my-10'>Simple CRUD using typescript</h1>
    <Tablecompo />
    </div>
  );
}

export default App;
