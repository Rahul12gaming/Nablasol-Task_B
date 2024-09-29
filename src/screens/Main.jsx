import React, { useState } from 'react'
import FormCard_D from '../components/FormCard_D'
import FormCardA from '../components/FormCard';
import FormCardB from '../components/FormCard_B';
import FormCardC from '../components/FormCard_C';
import { authGlobalStore } from '../context/GlobalStore';

function Main() {
    const [comp,setComp]=useState(<FormCardA />);
    const {open,setOpen}=authGlobalStore()
    const formList=[
        {
            id:'profile',
            component:<FormCardA />
        }
        ,{
            id:'view-select',
            component:<FormCardB/>
        },
        {
            id:'view-select',
            component:<FormCardC/>
        },
        {
            id:'view-select',
            component:<FormCard_D/>
        },
        
    ]
  return (
    <>
        <div className='w-12/12 flex flex-col items-center justify-center p-10'>
        
        {
          comp?comp:<></>
        }
        
           <div className='flex gap-2 mt-2 w-full justify-center'>
           {
                open?(
                    formList.map((item,idx)=>(
                        <button onClick={()=>setComp(item.component)} className='w-[17px] h-[12px] rounded-lg bg-slate-400 border border-slate-100 shadow-md focus:w-[20px]'></button>
                    ))
                ):<>
                    <div className="min-h-[50vh] m-auto p-4 flex justify-center items-center w-6/12 bg-white rounded-lg shadow-xl">
                        <button onClick={()=>setOpen(!open)} className='bg-blue-700 w-6/12 m-auto border border-slate-200 rounded-lg text-white font-medium p-4'>Create Project</button>
                    </div>
                </>
            }
           </div>
        </div>
    </>
  )
}

export default Main