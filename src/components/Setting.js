import './Setting.css'
import LogOut from './LogOut'
import {useState, useEffect} from 'react'
import img1 from '../image/icon/unnamed.jpg'
import PopUp from "./PopUp"
import EditWindow from './EditWindow'
import { useCallback } from 'react'
import axios from 'axios'


function Setting(){
    
    //const [buttonEditPopup, setEditPopup] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [uid, setUid] = useState("")
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

    const [guest, setGuest] = useState(true)
    const [guestName, setGuestName] = useState('Guest')

    function fetchUserHandler() {
        axios.get(`https://localhost/api/userinfo.php`,{ withCredentials: true }).then(function (response) {
            console.log(response.data)
            if (response.status === 401) {
                setGuest(true)
            }
            if (response.status === 200) {
                setGuest(false)
                setGuestName(response.data.username)
            }
        })
    }
    useEffect(() => {
        fetchUserHandler()
    }, [])

    // const fetchUserHandler = useCallback(async () => {
    //     try {
            
    //         const response = await fetch('https://localhost/api/userinfo.php', { credentials: 'include' })
    //         console.log(response.data)
    //         if (!response.ok) {
    //             throw new Error('Something went wrong!')
    //         }
    //         if (response.status === 401) {
    //             setGuest(true)
    //         }
    //         if (response.status === 200) {
    //             setGuest(false)
    //         }

    //     } catch (error) {
    //         throw new Error('Something went wrong!')
    //     }
    // }, []);


   

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