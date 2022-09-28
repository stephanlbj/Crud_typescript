import React, { useState } from 'react'
import {Infos, User} from "./Utils/Utils"
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import AddBtn from './AddBtn';
import { TableValue } from './Utils/tableHeading';
import { Usemycontext } from '../Context/Usecontext';



type DataToBeChanged = {
    id?:number
    name:string
    job:string
    year:string

}




const Tablecompo = () => {

    const {Visible, setIs_visible, arrInfos, setarrInfos} = Usemycontext()
  
    const [userinfos, setuserinfos] = useState(Infos)
    const [update, setupdate] = useState<number>(0)
    const [datatoChange, setdatatoChange] = useState<DataToBeChanged>({
        name:"",
        job:"",
        year:""
    })

  const Edit = (ID:number) =>{
    setupdate(ID)
     userinfos.map((item)=>{
        if(item.id == ID){
            const newobj = {...item}
           setdatatoChange(newobj)
        }
    })
   
  }

  const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setdatatoChange({...datatoChange,[e.target.name]:e.target.value})
  }
 

const OnsubMit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

      const newArr = userinfos.map((item)=>{

         if(item.id === datatoChange.id)
         return {...item, name:datatoChange.name, job:datatoChange.job, year:datatoChange.year}
     
            return item
               })
           setuserinfos(newArr)
           setupdate(0)
 }




      const Delete = (ID:number) =>{
  const result =  userinfos.filter((item)=>item.id !== ID)
  setuserinfos(result)
      }

      const Cancel = () =>{
        setupdate(0)
      }


    if(userinfos.length == 0)
    return <h1 className='flex items-center justify-center text-2xl'>No result found!!</h1>

    if(update != 0)
    return(
        <div className='border border-gray-300 w-fit mx-auto p-3 '>
            <form onSubmit={OnsubMit} className='  flex items-center justify-center space-x-4'>
                <input value={datatoChange.name} name="name" onChange={HandleChange} className="px-2 py-1"/>
                <input value={datatoChange.job} name="job" onChange={HandleChange} className="px-2 py-1"/>
                <input value={datatoChange.year} name="year" onChange={HandleChange} className="px-2 py-1"/>
                <button type='submit' className='bg-gray-300 px-2 py-1 '>Update</button>
                <button onClick={()=>Cancel()} className='bg-red-500 px-2 py-1 text-white '>Cancel</button>
            </form>
        </div>
    )

  return (
<div className=' w-full overflow-x-auto'>   


<AddBtn/>

<table className=' my-10 border border-gray-300 rounded-md mx-auto w-10/12 overflow-x-auto'>
  <thead className='overflow-x-auto'>
    <tr className='border-b border-gray-500 py-3 w-full'>
     {TableValue.map((item, ind)=>(
   <th key={ind}><div className='py-3'>{item}</div></th>
     ))}
    </tr>
  </thead>
  <tbody className='overflow-x-auto' >
  {userinfos.slice().reverse().map((item)=>(
  <tr key={item.id}  className='text-center '>
     
     <td>{item.name}</td>
     <td ><h1 className='text-gray-700'>{item.job}</h1></td>
     <td>{item.year}</td>
     <td>
        <div className='py-4 flex justify-center items-center space-x-3'>
           <AiFillEdit onClick={()=>Edit(item.id)} className='text-blue-500 cursor-pointer h-5 w-5'/> 
          <AiFillDelete onClick={()=>Delete(item.id)} className='cursor-pointer text-red-500 h-5 w-5'/>
        </div>
     </td>
     </tr>
               ))
     } 
</tbody>
</table>
</div>
  
  )
}

export default Tablecompo