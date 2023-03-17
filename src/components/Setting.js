import './Setting.css'
import LogOut from './LogOut'
import {useState, useEffect} from 'react'
import img1 from '../image/icon/unnamed.jpg'
import PopUp from "./PopUp"
import EditWindow from './EditWindow'
import axios from 'axios'
function Setting(){
    
    const [buttonEditPopup, setEditPopup] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [uid, setUid] = useState("")
    const [user, setUser] = useState([])
    function handleChange(newV){
        setEditPopup(newV)
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
    // const handleLookChange = (event) =>{
    //     setUid(event.target.value)
    //     console.log(uid);
    //     console.log(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/user/${uid}`);
    // }
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

                            <span className='UsernameFont'>{user.username}</span>
                        </div>
                    
                    </div>
                <div className='Iconw'>

            

                    <button onClick={() => setEditPopup(true)} className='Edituserprofile'>Edit User Profile</button>
                    <PopUp trigger={buttonEditPopup} >
                    <EditWindow trigger={buttonEditPopup} onChange={handleChange} id = {uid}></EditWindow>
                    </PopUp>
                        <LogOut trigger={buttonPopup} setTrigger={setButtonPopup}>
                    </LogOut>


                </div>
                <button className='Myaccount'>
                    <span className='MyaccountFont'>My account</span>
                </button>
                <button className='Profile'>
                    <span className='ProfileFont'>Profile</span>
                </button>   
                
            </div>
        </div>
    )
}

export default Setting