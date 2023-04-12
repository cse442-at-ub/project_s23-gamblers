import './Setting.css'
import LogOut from './LogOut'
import {useState, useEffect} from 'react'
import img1 from '../image/icon/unnamed.jpg'

import axios from 'axios'


function Setting(){
    
    //const [buttonEditPopup, setEditPopup] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);



    const [guestName, setGuestName] = useState('Guest')

    function fetchUserHandler() {
        axios.get(`https://localhost/api/userinfo.php`,{ withCredentials: true }).then(function (response) {
            console.log(response.data)
            if (response.status === 401) {

            }
            if (response.status === 200) {

                setGuestName(response.data.username)
            }
        })
    }
    useEffect(() => {
        fetchUserHandler()
    }, [])

   

    return(
        <div className='Background'>
            <div className='Mainpage'>
                <a href='/' >
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

                        <span className='UsernameFont'>{guestName}</span>
                        </div>
                    
                    </div>
                    <div className='cardposition'>
                    <button className="card">
                        <a href='\iteminfo' >
                        <img className='img2' src={img1} alt=""/>
                        <div className="container">
                            <h4><b>Item Name</b></h4> 
                        </div>
                        </a> 
                    </button> 
                </div>
                <div className='Iconw'>

                <a href='/profile' >
                    <button type='button' className='Edituserprofile'>Edit User Profile</button>
                        <LogOut trigger={buttonPopup} setTrigger={setButtonPopup}>
                    </LogOut>
                    </a>


                </div>
                <button className='Myaccount'>
                    <span className='MyaccountFont'>My account</span>
                </button>
                <a href='/profile' >
                <button className='Profile'>
                    <span className='ProfileFont'>Profile</span>
                </button>   
                </a>
                
            </div>
        </div>
    )
}

export default Setting