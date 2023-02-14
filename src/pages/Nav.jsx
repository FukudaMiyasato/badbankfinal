import React from "react";
import {Link} from "react-router-dom";

const Nav =()=>{

    return(<>
        <div className="w-40 h-screen bg-cyan-800">

                <div className="mb-8 text-xs p-4 flex">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    <div className="pl-1">
                        <div>user</div>
                        <div>Logout</div>
                    </div>
                </div>
            <ul className="pl-4">
                <li>
                    <Link to='/deposit'>Depositar</Link>
                </li>
                <li>
                    <Link to='/withdrawal'>Sacar</Link>
                </li>
                <li>
                    <Link to='/database'>Database</Link>
                </li>
            </ul>
            
            
        </div>
    </>)

}

export default Nav;