import { useState } from "react";
import axios from "axios";
export default function Register(){
    const[username, setUsername] =useState('');
    const[password, setPassword] =useState('');
     
     const register=async(ev)=>{
        ev.preventDefault(); //prevent form from submitting at random urls
       await axios.post('/register',{username,password});
    }


    return(
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb12" onSubmit={register}>
                <input
                type="text" 
                value={username} 
                onChange={ev=>setUsername(ev.target.value)} 
                placeholder="username" 
                className="block w-full rounded-sm p-2 mb-2 border"
                />
                <input 
                type="password" 
                value={password}  
                onChange={ev=>setPassword(ev.target.value)} 
                placeholder="password" 
                className="block w-full rounded-sm p-2 mb-2 border"/>
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
            </form>
        </div>
    );
}
