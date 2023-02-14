import Nav from "./Nav";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Withdrawal = ()=>{
    const {userContext} = useContext(DataContext);
    const navigate = useNavigate();
    
    
    function press(){
        alert('hola');
    }
    if(userContext.login){
    return(
        <>
            <div className="flex">
            <Nav/>
            <div className="p-10 b-2 grid-col-1">
                <h1 className="text-2xl h-10">Sacar Dinero</h1>
                <div className="border-t flex">
                    <div className="text-sm mt-1">Ingresa el monto que quieres sacar:</div>
                </div>
                <form className="mt-6" onSubmit={press}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Monto
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="monto" type="number" placeholder="monto"/>
                    <div className="p-4">
                        
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            </div> 
        </>
    )}else{
        navigate("/");
    }
}

export default Withdrawal;