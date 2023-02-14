import React from "react";
import {Link} from "react-router-dom";

const CreateAccount = ()=>{
    function press(){
        alert('hola');
    }
    return(
        <>
        <div className="w-96">
            <h1>CREAR UNA CUENTA</h1>
            <form className="mt-6" onSubmit={press}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Usuario :
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="monto" type="text" placeholder="user"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Password :
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="monto" type="password" placeholder="password"/>
                    
                    <input type="submit" value="Submit" />
                </form>
                <div className="mt-8">
                <Link to='/'>Ya tengo una cuenta</Link>
                </div>
            </div>
        
        </>);

}

export default CreateAccount;