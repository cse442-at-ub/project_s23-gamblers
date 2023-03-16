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
                            <img className='img1' src={img1} alt='icon' />
                        </div>
                        <div className='Username'>
                            <span className='UsernameFont'>Username</span>
                        </div>
                    
                    </div>
                <div className='Iconw'>
                <a href='\profile' >
                    <button type='button' className='Edituserprofile'>
                        <span className='EdituserprofileFont'>Edit User Profile</span>
                    </button>
                    </a>
                </div>
                <button className='Myaccount'>
                    <span className='MyaccountFont'>My account</span>
                </button>
                <a href='\profile' >
                <button className='Profile'>
                    <span className='ProfileFont'>Profile</span>
                </button>
                </a>
                <div className='cardposition'>
                <a href='\iteminfo' >
                    <button className="card">
                        <img className='img2' src={img1} alt="Avatar"/>
                        <div class="container">
                            <h4><b>Item Name</b></h4> 
                        </div>
                    </button> 
                    </a> 
                </div>

                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                </PopUp>
            </div>
        </div>
    )
}

export default Setting