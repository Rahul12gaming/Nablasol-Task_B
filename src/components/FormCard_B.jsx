import { PiListNumbersFill } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import React from "react";
import { authGlobalStore } from "../context/GlobalStore";

function FormCardB() {
  const { open, setOpen } = authGlobalStore();
  return (
    <>
      {open ? (
        <div className="min-h-[100vh] p-2 bg-white shadow-xl rounded-md border border-slate-100 w-11/12 m-auto md:w-5/12">
          <button onClick={()=>setOpen(!open)}  className="float-right">
            <IoMdClose size={20} />
          </button>
          <div className="flex flex-col gap-2 items-center justify-center mt-4">
            <h1 className="text-2xl text-slate-700 font-medium">
              Select a View
            </h1>
            <p className="text-slate-500 font-medium">
              you can also coustomize views in settings.
            </p>
          </div>
          <div className="w-10/12 m-auto flex flex-col gap-6 mt-6">
            <div className="flex gap-10 ">
              <div className="w-12/12 flex flex-col gap-2 item-center justify-center">
                <button className="border border-slate-300 rounded-md p-10 w-12/12 focus:border-blue-500">
                  <PiListNumbersFill className="text-slate-300 " size={100} />
                </button>
                <p className="text-slate-400 font-medium">List</p>
              </div>

              <div className="flex flex-col gap-2 item-center justify-center">
                <button className="border border-slate-300 p-10 w-12/12 focus:border-blue-500">
                  <MdOutlineDashboard className="text-slate-400 " size={100} />
                </button>
                <p className="text-slate-500 font-medium">Board</p>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <button className="text-slate-700 font-medium w-4/12 border border-slate-100 p-2 shadow-md">
                Back
              </button>
              <button className="bg-blue-500 p-2 text-white font-medium w-4/12 rounded-md shadow-lg">
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
    // <div className="min-h-[100vh] p-2 bg-white shadow-xl rounded-md border border-slate-100 w-11/12 m-auto md:w-5/12">
    //   <button className="float-right">
    //     <IoMdClose size={20} />
    //   </button>
    //   <div className="flex flex-col gap-2 items-center justify-center mt-4">
    //     <h1 className="text-2xl text-slate-700 font-medium">Select a View</h1>
    //     <p className="text-slate-500 font-medium">
    //       you can also coustomize views in settings.
    //     </p>
    //   </div>
    //   <div className="w-10/12 m-auto flex flex-col gap-6 mt-6">
    //     <div className="flex gap-10 ">
    //       <div className="w-12/12 flex flex-col gap-2 item-center justify-center">
    //         <button className="border border-slate-300 rounded-md p-10 w-12/12 focus:border-blue-500">
    //           <PiListNumbersFill className="text-slate-300 " size={100} />
    //         </button>
    //         <p className="text-slate-400 font-medium">List</p>
    //       </div>

    //       <div className="flex flex-col gap-2 item-center justify-center">
    //         <button className="border border-slate-300 p-10 w-12/12 focus:border-blue-500">
    //           <MdOutlineDashboard className="text-slate-400 " size={100} />
    //         </button>
    //         <p className="text-slate-500 font-medium">Board</p>
    //       </div>
    //     </div>

    //     <div className="flex items-center gap-10">
    //       <button className="text-slate-700 font-medium w-4/12 border border-slate-100 p-2 shadow-md">
    //         Back
    //       </button>
    //       <button className="bg-blue-500 p-2 text-white font-medium w-4/12 rounded-md shadow-lg">
    //         Next
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default FormCardB;
