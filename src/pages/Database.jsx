import Nav from "./Nav";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Database = ()=>{
    const {userContext} = useContext(DataContext);
    const navigate = useNavigate();
    
    
    if(userContext.login){
    return(
        <>
            <div className="flex">
            <Nav/>
            <div className="p-10 b-2 grid-col-1">
                <h1 className="text-2xl h-10">Data base</h1>
                <div className="border-t flex">
                    <div className="text-sm mt-1">Todas tus transacciones:</div>
                </div>
                
            </div>
            </div> 
        </>
    )}else{
        navigate("/");
    }
}

export default Database;