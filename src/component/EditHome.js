import "./EditHome.css"
import { useState } from 'react';
import PopUp from "./PopUp";
import EditWindow from "./EditWindow";
function EditHome(){
    const [buttonPopup, setButtonPopup] = useState(false)
    function handleChange(newV){
        setButtonPopup(newV)
    }
    return (
        <div>
            <button className='the-pop-button' onClick={() => setButtonPopup(true)}>edit profile</button>
            <PopUp trigger={buttonPopup} >
            <EditWindow trigger={buttonPopup} onChange={handleChange}></EditWindow>
            </PopUp>
        </div>
    )
}
export default EditHome