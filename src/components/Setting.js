import './Setting.css'
import LogOut from './LogOut'
import {useState, useEffect} from 'react'
import img1 from '../image/icon/unnamed.jpg'
import axios from 'axios'
function Setting(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [uid, setUid] = useState("")
    const [user, setUser] = useState([])
    function handleChange(newV){
        setButtonPopup(newV)
    }

    useEffect(()=>{
        handlerGetUser()
    },[])

    const handlerGetUser = () => {
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/user/2`, "").then(function(response) {
            // console.log(response.data);
            setUser(response.data);
            console.log(user);
        });
    }
    const handleLookChange = (event) =>{
        setUid(event.target.value)
        console.log(uid);
        console.log(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/user/${uid}`);
    }
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

                            <span className='UsernameFont'>{user.username}</span>
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
                        <div className="container">
                            <h4><b>Item Name</b></h4> 
                        </div>
                    </button> 
                    </a> 
                </div>

                <LogOut trigger={buttonPopup} setTrigger={setButtonPopup}>
                </LogOut>
            </div>
        </div>
    )
}

export default Setting