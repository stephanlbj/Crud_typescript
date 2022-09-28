import React from 'react'
import { Usemycontext } from '../Context/Usecontext'

const AddBtn = () => {

    const {Visible, setIs_visible} = Usemycontext()
    
    const Addvalue = () =>{
        setIs_visible(!Visible)
    }
  return (
    <div className='flex justify-end w-10/12 mx-auto my-6'>
    <h1 onClick={()=>Addvalue()}
    className='bg-blue-500 text-white px-5 py-1 cursor-pointer '>Add</h1>
</div> 
  )
}

export default AddBtn