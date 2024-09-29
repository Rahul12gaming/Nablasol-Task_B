import { IoMdClose } from "react-icons/io";
import DatePicker from "react-datepicker";
import { BsFillCalendar2DateFill } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from 'react'
import { authGlobalStore } from "../context/GlobalStore";

function FormCardA() {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());

    const {open,setOpen}=authGlobalStore()

  return (
    <>
    {
        open?(
            <>
            <div className="min-h-[100vh] p-2 bg-white shadow-xl rounded-md border border-slate-100 w-11/12 m-auto md:w-5/12">
            <button onClick={()=>setOpen(!open)} className="float-right"><IoMdClose size={20}/></button>
            <div className="w-10/12 m-auto flex flex-col gap-4 mt-6">
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-lg" htmlFor="">Project Name <sup>*</sup></label>
                    <input placeholder="Enter project name here" type="text" name="" id="" className="border border-slate-600 focus:outline-blue-700 rounded-md p-2"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-lg" htmlFor="">Client <sup>*</sup></label>
                    <div className="flex gap-4 items-center">
                    <select className="border border-slate-600 focus:outline-blue-700 rounded-md p-2 w-6/12" name="" id="">
                        <option className="border border-slate-600 focus:outline-blue-700 rounded-md p-2" value="">Select Client</option>
                    </select>
                    <p className="text-slate-600">OR</p>
                    <button className="border border-slate-600 focus:outline-blue-700 rounded-md p-2 w-6/12"> <span className="text-lg">+</span> Add Client</button>

                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-lg" htmlFor="">Dates <sup>*</sup></label>
                    <div className="flex flex-col w-full md:flex-row gap-2 items-center">
                        <button className="flex gap-2 items-center border border-slate-700 p-2 rounded-md text-slate-700 w-6/12"><BsFillCalendar2DateFill size={20}/>
                        <DatePicker className="focus:outline-none" selected={startDate} onChange={(date)=>setStartDate(date)}/>

                        </button>

                        <p>-</p>
                        <button className="flex gap-2 items-center border border-slate-700 p-2 rounded-md text-slate-700 w-6/12"><BsFillCalendar2DateFill size={20}/>
                        <DatePicker className="focus:outline-none" selected={startDate1} onChange={(date)=>setStartDate1(date)}/>

                        </button>

                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold text-lg" htmlFor="">Notes <sup>*</sup></label>
                    <textarea name="" className="border border-slate-600 focus:outline-blue-700 rounded-md p-2" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="flex items-center gap-10">
                <button className="text-slate-700 font-medium w-4/12 border border-slate-100 p-2 shadow-md">Back</button>
                <button className="bg-blue-500 p-2 text-white font-medium w-4/12 rounded-md shadow-lg">Next</button>
            </div>
            </div>
            
        </div>
            </>
        ):<></>
    }
        {/* <div className="min-h-[100vh] p-2 bg-white shadow-xl rounded-md border border-slate-100 w-11/12 m-auto md:w-5/12">
            <button onClick={()=>setOpen(!open)} className="float-right"><IoMdClose size={20}/></button>
            <div className="w-10/12 m-auto flex flex-col gap-4 mt-6">
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-lg" htmlFor="">Project Name <sup>*</sup></label>
                    <input placeholder="Enter project name here" type="text" name="" id="" className="border border-slate-600 focus:outline-blue-700 rounded-md p-2"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-lg" htmlFor="">Client <sup>*</sup></label>
                    <div className="flex gap-4 items-center">
                    <select className="border border-slate-600 focus:outline-blue-700 rounded-md p-2 w-6/12" name="" id="">
                        <option className="border border-slate-600 focus:outline-blue-700 rounded-md p-2" value="">Select Client</option>
                    </select>
                    <p className="text-slate-600">OR</p>
                    <button className="border border-slate-600 focus:outline-blue-700 rounded-md p-2 w-6/12"> <span className="text-lg">+</span> Add Client</button>

                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-lg" htmlFor="">Dates <sup>*</sup></label>
                    <div className="flex gap-2 items-center">
                        <button className="flex gap-2 items-center border border-slate-700 p-2 rounded-md text-slate-700 w-6/12"><BsFillCalendar2DateFill size={20}/>
                        <DatePicker className="focus:outline-none" selected={startDate} onChange={(date)=>setStartDate(date)}/>

                        </button>

                        <p>-</p>
                        <button className="flex gap-2 items-center border border-slate-700 p-2 rounded-md text-slate-700 w-6/12"><BsFillCalendar2DateFill size={20}/>
                        <DatePicker className="focus:outline-none" selected={startDate1} onChange={(date)=>setStartDate1(date)}/>

                        </button>

                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold text-lg" htmlFor="">Notes <sup>*</sup></label>
                    <textarea name="" className="border border-slate-600 focus:outline-blue-700 rounded-md p-2" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="flex items-center gap-10">
                <button className="text-slate-700 font-medium w-4/12 border border-slate-100 p-2 shadow-md">Back</button>
                <button className="bg-blue-500 p-2 text-white font-medium w-4/12 rounded-md shadow-lg">Next</button>
            </div>
            </div>
            
        </div> */}
    </>
  )
}

export default FormCardA