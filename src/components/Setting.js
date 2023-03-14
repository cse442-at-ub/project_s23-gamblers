import './Setting.css'
import PopUp from './LogOut'
import {useState } from 'react'
import img1 from '../image/icon/unnamed.jpg'
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
                        <div className='circle'>
                            <img src={img1} alt='icon' />
                        </div>
                        <div className='Username'>
                            <span className='UsernameFont'>Username</span>
                        </div>
                    
                    </div>
                <div className='Iconw'>
                    <button type='button' className='Edituserprofile'>
                        <span className='EdituserprofileFont'>Edit User Profile</span>
                    </button>
                </div>
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