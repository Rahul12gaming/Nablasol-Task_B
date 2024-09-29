import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaPeopleRobbery } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { authGlobalStore } from '../context/GlobalStore';


function FormCardC() {
    const {open,setOpen}=authGlobalStore();
  return (
    <>
          {
            open?(
                <div className="min-h-[100vh] p-2 bg-white shadow-xl rounded-md border border-slate-100 w-11/12 m-auto md:w-5/12">
            <button onClick={()=>setOpen(!open)}  className="float-right"><IoMdClose size={20}/></button>
            <div className="flex flex-col gap-2 items-center justify-center mt-4">
                <h1 className="text-2xl text-slate-700 font-medium">Who can manage project's</h1>
                <p className="text-slate-500 font-medium">Don'y panic, you can also coustomize the permission in settings.</p>
            </div>
            <div className="w-10/12 m-auto flex flex-col gap-6 mt-6">

                <button className='flex items-center gap-4 border border-slate-300 rounded-md p-2 focus:border-blue-700 '>
                    <FaPeopleRobbery className='text-slate-500' size={40}/>
                    <div className='flex flex-col gap-2 items-start '>
                        <h1 className='text-lg font-medium'>Everyone</h1>
                        <p className='text-md text-slate-700 w-11/12'>All users can now to see it, but guests cannot access the project.</p>
                    </div>
                </button>

                <button className='flex items-center gap-4 border border-slate-300 rounded-md p-2 focus:border-blue-700 '>
                    <FaUserTie className='text-slate-500' size={40}/>
                    <div className='flex flex-col gap-2 items-start'>
                        <h1 className='text-lg font-medium'>Everyone</h1>
                        <p className='text-md text-slate-700 w-11/12'>All users can now to see it, but guests cannot access the project.</p>
                    </div>
                </button>

                <button className='flex items-center gap-4 border border-slate-300 rounded-md p-2 focus:border-blue-700 '>
                    <BsFillPeopleFill className='text-slate-500' size={40}/>
                    <div className='flex flex-col gap-2 items-start'>
                        <h1 className='text-lg font-medium'>Everyone</h1>
                        <p className='text-md text-slate-700 w-11/12'>All users can now to see it, but guests cannot access the project.</p>
                    </div>
                </button>
                
                <div className="flex items-center gap-10">
                <button className="text-slate-700 font-medium w-4/12 border border-slate-100 p-2 shadow-md">Back</button>
                <button className="bg-blue-500 p-2 text-white font-medium w-4/12 rounded-md shadow-lg">Next</button>
                </div>
            </div>
            
        </div>
            ):<>,</>
          }
    </>
)
}

export default FormCardC