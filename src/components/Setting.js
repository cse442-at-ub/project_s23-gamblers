import './Setting.css'
import LogOut from './LogOut'
import {useState, useEffect} from 'react'
import img1 from '../image/icon/unnamed.jpg'
import PopUp from "./PopUp"
import EditWindow from './EditWindow'
// import axios from 'axios'
import { useLocation } from 'react-router-dom';

function Setting(){
    
    //const [buttonEditPopup, setEditPopup] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [uid, setUid] = useState("")
    const [buttonEditPopup, setEditPopup] = useState(false);
    const [username, setUsername] = useState("")
    const [user, setUser] = useState([])
    function handleChange(newV){
        setEditPopup(newV)
    }                          
    // const [user, setUser] = useState([])
    //function handleChange(newV){
        //setEditPopup(newV)
    //}

    // useEffect(()=>{
    //     handlerGetUser()
    // },[])
    // const handlerGetUser = () => {
    //     axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/user/2`, "").then(function(response) {
    //         setUser(response.data);
    //     });
    // }
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

                        <span className='UsernameFont'></span>
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

    
                    <button onClick={() => setEditPopup(true)} className='Edituserprofile'>Edit User Profile</button>
                    <PopUp trigger={buttonEditPopup} >
                    <EditWindow trigger={buttonEditPopup} onChange={handleChange} id = {user.id}></EditWindow>
                    </PopUp>


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