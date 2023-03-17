import React from "react"
import './LogOut.css'

function PopUp(props){
    return(props.trigger)?(
        <div className="popup">
        <div className='Logoutnotification'>
            <span className='LogOut1'>Log Out</span>
            <span className='Areyousureyouwanttologout'>Are you sure you want to log out?</span>
            <div className='logoutmain'>
                <button className='cancelbutton' onClick={()=>props.setTrigger(false)}>
                    <span className='cancelfont'>Cancel</span>
                </button>
                <a href="\">
                <button className='logoutbutton' >
                    <span className='logoutfont'>Log Out</span>
                </button>
                </a>
            </div>
        </div>
        </div>
    ): "";

}
export default PopUp