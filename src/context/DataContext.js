import React, { createContext,useState } from "react";


export const DataContext = createContext();



export const DataProvider = ({children})=>{

    const [userContext,setUserContext]=useState({user:'Juan',login:true});
    
    return(
        <DataContext.Provider value={{userContext,setUserContext}}>
            {children}
        </DataContext.Provider>
    )
}