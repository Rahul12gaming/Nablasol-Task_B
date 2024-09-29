import { createContext, useContext, useState } from "react";

 const GlobalStore=createContext();

export const GlobalStoreProvider=({children})=>{

    const [open,setOpen]=useState(true);
    return(
        <>
            <GlobalStore.Provider value={{setOpen,open}}>
                {children}
            </GlobalStore.Provider>
        </>
    )
}

export const authGlobalStore=()=>{
    return (
        useContext(GlobalStore)
    )
}