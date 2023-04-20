
import { useState } from 'react';
import PopUp from "./PopUpWindow";
import EditWindow from "./EditWindow";
import axios from "axios";
function EditHome(){
    const [buttonPopup, setButtonPopup] = useState(false)
    const [uid, setUid] = useState("")
    const [user, setUser] = useState([])
    function handleChange(newV){
        setButtonPopup(newV)
    }
    const handlerGetUser = (event) => {
        event.preventDefault()
        axios.get(process.env.REACT_APP_BASENAME+`api/user/${uid}`, "").then(function(response) {
            // console.log(response.data);
            setUser(response.data);
            console.log(user);
        });
    }
    const handleLookChange = (event) =>{
        setUid(event.target.value)
        console.log(uid);
        console.log(process.env.REACT_APP_BASENAME+`api/user/${uid}`);
    }
    return (
        <div>
            <label >uid</label><tr/>
            <input type='txt' onChange={handleLookChange} name="look"></input>
            <tr/>
            <button  onClick={handlerGetUser}>look information</button>
            <tr/>
         
            <td>id:{user.id}</td><tr/>
            <td>username:{user.username}</td><tr/>
            <td>email:{user.email}</td><tr/>
            <td>phoneNumber:{user.phoneNumber}</td><tr/>

            <button className='the-pop-button' onClick={() => setButtonPopup(true)}>edit profile</button>
            <PopUp trigger={buttonPopup} >
            <EditWindow trigger={buttonPopup} onChange={handleChange} id = {uid}></EditWindow>
            </PopUp>
        </div>
    )
}
export default EditHome