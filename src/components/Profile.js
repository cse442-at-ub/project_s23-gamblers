import './Profile.css'
import LogOut from './LogOut'
import {useState} from 'react'
import img1 from '../image/icon/unnamed.jpg'
import PopUp from "./PopUp"
import EditWindow from './EditWindow'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Profile(){
    
    const [buttonEditPopup, setEditPopup] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [username, setUsername] = useState("")
    const [user, setUser] = useState([])
    function handleChange(newV){
        setEditPopup(newV)
    }
    // const location = useLocation()
    // const {username} = location.state
  
    const handlerGetUser = (event) => {
        event.preventDefault()
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/username/${username}`, "").then(function(response) {
            // console.log(response.data);
            setUser(response.data);
            console.log(user);
        });
    }
    // useEffect(()=>{
    //     handlerGetUser()
    // },[])
    // const handlerGetUser = () => {
    // axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/username/[id] `, "").then(function(response) 
    // {
    //     // console.log(response.data);
    //     setUser(response.data);
    //     console.log(user);
    // })
   
    const handleLookChange = (event) =>{
        setUsername(event.target.value)
        console.log(username);
        console.log(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/username/${username}`);
    }
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

                        <label className='UsernameFont' >username</label><tr/>
                        <input type='txt' onChange={handleLookChange} name="look"></input>
                        <button  onClick={handlerGetUser}>look information</button>
                        <tr/>
                        
                        <td >username:{user.username}</td><tr/>
                        <td >email:{user.email}</td><tr/>
                        <td >phoneNumber:{user.phoneNumber}</td><tr/>
                        </div>
                    </div>
                <div className='Iconw'>

            

                    <button onClick={() => setEditPopup(true)} className='Edituserprofile'>Edit User Profile</button>
                    <PopUp trigger={buttonEditPopup} >
                    <EditWindow trigger={buttonEditPopup} onChange={handleChange} id = {user.id}></EditWindow>
                    </PopUp>
                        <LogOut trigger={buttonPopup} setTrigger={setButtonPopup}>
                    </LogOut>


                </div>
                <Link to='/Setting'>
                <button className='Myaccount1'>
                    <span className='MyaccountFont1'>My account</span>
                </button>
                </Link>
                <Link to='/profile'>
                    <button className='Profile1'>
                    <span className='ProfileFont1'>Profile</span>
                </button> 
                </Link>  
                
            </div>
        </div>
    )
}

export default Profile