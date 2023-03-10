import './Setting.css'
import PopUp from './LogOut'
import {useState } from 'react'
function Setting(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
        <div className='Background'>
            <div className='Mainpage'>
                <a href='\' >
                <button type='button' className='Back' >
                    <span className='BackFont'>Back</span>
                </button>
                </a>
                <button onClick={()=>setButtonPopup(true)} className='LogOut'>
                    <span className='LogOutFont'>Log Out</span>
                </button>
                    <div className='Icon'>
                    
                    </div>
                <div className='Iconw'></div>
                <button className='Myaccount'>
                    <span className='MyaccountFont'>My account</span>
                </button>
                <button className='Profile'>
                    <span className='ProfileFont'>Profile</span>
                </button>
                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                </PopUp>
            </div>
        </div>
    )
}

export default Setting