import './Profile.css'
import {useState} from 'react'
import axios from 'axios'
import { React,useEffect } from 'react'
function Profile(){
    const [user, setUser] = useState(undefined)
    const handlerGetUser = (event) => {
        
        axios.get(`https://localhost/api/userinfo.php`, {withCredentials:true}).then(function(response) {
            setUser(response.data);
            console.log(user);
        });
    }
    useEffect(()=>{
        handlerGetUser()
        },
        []
    )
    if(user === undefined){
        return null;
    }
    
    return(
        <div className=''>
            <td className='information_font'>Username:{user.username}</td><tr/>
            <td className='information_font'>Email:{user.email}</td><tr/>
            <td className='information_font'>Phone Number:{user.phone_number}</td><tr/>
        </div>

                 
    )
}

export default Profile