import React, { useState } from 'react'
import { Usemycontext } from '../Context/Usecontext'
import Input from './Input'
import { User , Infos} from './Utils/Utils'



const AddForm = () => {


    const {Visible, setIs_visible, arrInfos, setarrInfos} = Usemycontext()
  

const [newData , setNewData] = useState<User>({
    id:0,
    name:"",
    job:"",
    year:""
})

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setNewData({...newData,[e.target.name]:e.target.value})
}


const AddNewData = (e:React.MouseEvent<HTMLButtonElement>) =>{
   e.preventDefault()

    const newObj = {...newData, id:Date.now()}
    Infos.push(newObj)
    setarrInfos(Infos)
    newData.name = ""
    newData.job = ""
    newData.year = ""
    //newData.id = Date.now()
   // setNewData({id:0, name:"", job:"",year:""})
    setIs_visible(false)
 
}

const cancel = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    setIs_visible(!Visible)
}


  return (
    <div className={`${!Visible && "hidden"} fixed left-0 top-0 right-0 bottom-0 z-20 bg-black opacity-90`}>
        
        <div className='flex flex-col items-center justify-center space-y-4 h-screen'>
        <h1 onClick={()=>setIs_visible(!Visible)} className="text-white">Add data</h1>
      <div className='border border-gray-200 p-5 rounded-md'>
      <form className='flex flex-col justify-center items-center space-y-5'>
 
      <Input name='name' handleClick={handleChange} placeholder="Enter name" val={newData.name} />
      <Input name='job' handleClick={handleChange} placeholder="Enter job" val={newData.job}/>
      <Input name='year' handleClick={handleChange} placeholder="Enter year" val={newData.year}/>
      <div className='flex items-center justify-around space-x-2 py-2'>

      <button onClick={(e)=>AddNewData(e)}
       disabled={!newData.name  || !newData.job  || !newData.year  && true}
       className={` ${!newData.name  || !newData.job  || !newData.year ? "bg-gray-500" :"bg-blue-500"}  text-white px-2 py-1 rounded-md cursor-pointer`}>Add Data</button>
      <button onClick={(e)=>cancel(e)} className='bg-red-500 text-white px-2 py-1  rounded-md cursor-pointer'>Cancel</button>
       
      </div>
        </form>
      </div>
       <div>

       </div>

        </div>
        
    </div>
  )
}

export default AddForm