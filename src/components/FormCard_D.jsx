import React from 'react'
import { IoMdClose } from "react-icons/io";
import { authGlobalStore } from '../context/GlobalStore';

function FormCard_D() {
  const {open,setOpen}=authGlobalStore();

  return (
    <>
    {
      open?(
        <div className="min-h-[100vh] p-2 bg-white shadow-xl rounded-md border border-slate-100 w-11/12 m-auto md:w-5/12">
            <button onClick={()=>setOpen(!open)}  className="float-right"><IoMdClose size={20}/></button>
            <div className="flex flex-col gap-2 items-center justify-center mt-4 w-12/12 m-auto">
                <h1 className="text-2xl text-slate-700 font-medium">Add Task</h1>
                
                <div className='mt-2 flex gap-4 w-[90%]' >
                <input type="text" name="" id="" placeholder='ADD TASK' className="w-10/12 focus:outline-blue-700 text-center border border-slate-400  rounded-md" />
                <button className='w-4/12 bg-blue-400 text-white p-4 rounded-lg text-medium'>Add</button>
                </div>
            </div>
            <div className="w-10/12 m-auto flex flex-col gap-6 mt-6">

                
                <div className="flex items-center gap-10">
                <button className="text-slate-700 font-medium w-4/12 border border-slate-100 p-2 shadow-md">Back</button>
                <button className="bg-blue-500 p-2 text-white font-medium w-4/12 rounded-md shadow-lg">Next</button>
                </div>
            </div>
            
        </div>
      ):<></>
    }
    </>
  )
}

export default FormCard_D